/* Small progressive enhancements. The page works without this file. */
(function () {
  var root = document.documentElement;
  var motionOK = !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var each = function (sel, fn, scope) { Array.prototype.forEach.call((scope || document).querySelectorAll(sel), fn); };

  // ---- Theme toggle: remembers the visitor's choice; otherwise follows the OS ----
  function currentTheme() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  function labelToggles() {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
      b.setAttribute('aria-label', 'Switch to ' + next + ' theme');
      if (b.textContent.trim()) b.textContent = 'Switch to ' + next + ' theme';
    });
  }
  document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      labelToggles();
    });
  });
  labelToggles();

  // ---- Close the mobile menu after choosing a link ----
  var menu = document.querySelector('.menu');
  if (menu) menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) menu.removeAttribute('open');
  });

  // ---- Header: reading progress, and the section you're in ----
  var progress = document.querySelector('.progress');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]:not(.btn)'));
  var navTargets = navLinks.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  var ticking = false;
  function onScroll() {
    ticking = false;
    var max = root.scrollHeight - root.clientHeight;
    if (progress) progress.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, window.scrollY / max) : 0) + ')';
    var current = -1;
    navTargets.forEach(function (s, i) { if (s && s.getBoundingClientRect().top < window.innerHeight * 0.35) current = i; });
    navLinks.forEach(function (a, i) { a.classList.toggle('on', i === current); });
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  // ---- Sections rise into view as you scroll ----
  // Only below-the-fold blocks are hidden, so nothing on screen at load blinks out.
  if (motionOK && 'IntersectionObserver' in window) {
    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        revealer.unobserve(el);
        el.classList.add('in');
        // hand the element back to its own hover transitions once it has arrived
        setTimeout(function () { el.classList.remove('reveal', 'in'); el.style.removeProperty('--d'); }, 1400);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    each('.section-head, .usecases, .case, .more li, .principles li, .offer, .snapshot, .steps li, .term, .tz, ' +
         '.about-text, .timeline li, .beyond, .stack-group, .contact-intro, form.brief', function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      var i = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.setProperty('--d', Math.min(i % 4, 3));
      el.classList.add('reveal');
      revealer.observe(el);
    });
  }

  // ---- Hero figures count up once ----
  if (motionOK) each('[data-count]', function (el) {
    var end = +el.getAttribute('data-count');
    var pre = el.getAttribute('data-pre') || '', suf = el.getAttribute('data-suf') || '';
    var start = null;
    function step(t) {
      if (start === null) start = t;
      var p = Math.min(1, (t - start) / 1400);
      el.textContent = pre + Math.round(end * (1 - Math.pow(1 - p, 3))) + suf;
      if (p < 1) window.requestAnimationFrame(step);
    }
    el.textContent = pre + '0' + suf;
    setTimeout(function () { window.requestAnimationFrame(step); }, 450);
  });

  // ---- Architecture drawings: trace the path one stage at a time ----
  // Runs once when a drawing scrolls into view; the Trace button replays it.
  each('.case-drawing', function (panel) {
    var flow = panel.querySelector('.flow');
    if (!flow || !motionOK) return;
    var steps = Array.prototype.slice.call(flow.children);
    var timer = null;
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'trace-btn';
    button.textContent = '▶ Trace';
    button.setAttribute('aria-label', 'Trace this flow step by step');
    button.setAttribute('aria-pressed', 'false');
    panel.insertBefore(button, panel.firstChild);
    panel.classList.add('has-trace');

    function trace() {
      clearTimeout(timer);
      steps.forEach(function (el) { el.classList.remove('lit', 'done'); });
      flow.classList.add('tracing');
      button.setAttribute('aria-pressed', 'true');
      var k = 0;
      (function next() {
        if (k > 0) { steps[k - 1].classList.remove('lit'); steps[k - 1].classList.add('done'); }
        if (k === steps.length) {
          timer = setTimeout(function () {
            flow.classList.remove('tracing');
            steps.forEach(function (el) { el.classList.remove('done'); });
            button.setAttribute('aria-pressed', 'false');
          }, 250);
          return;
        }
        var el = steps[k++], isEdge = el.classList.contains('edge');
        el.classList.add(isEdge ? 'done' : 'lit');
        timer = setTimeout(next, isEdge ? 200 : 520);
      })();
    }
    button.addEventListener('click', trace);

    if ('IntersectionObserver' in window) {
      var watcher = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { watcher.disconnect(); trace(); }
      }, { threshold: 0.45 });
      watcher.observe(panel);
    }
  });

  // ---- Working hours: mark the current time in Hyderabad ----
  var tz = document.querySelector('.tz');
  if (tz) {
    var nowText = tz.querySelector('[data-now]');
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    var tick = function () {
      var d = new Date();
      var mins = (d.getUTCHours() * 60 + d.getUTCMinutes() + 330) % 1440; // IST is UTC+5:30
      tz.style.setProperty('--now', (mins / 1440 * 100) + '%');
      if (nowText) nowText.textContent = pad(Math.floor(mins / 60)) + ':' + pad(mins % 60) + ' IST';
    };
    each('.tz-row', function (row, i) { row.style.setProperty('--r', i); }, tz);
    tz.classList.add('has-now');
    tick();
    setInterval(tick, 60000);
  }

  // ---- Hero drawing: the design waterline follows the pointer (desktop) ----
  var plan = document.querySelector('.bodyplan');
  var level = plan && plan.querySelector('.water-level');
  var dwl = plan && plan.querySelector('.dwl-label');
  if (level && dwl) {
    var DECK = 44, BASE = 300, HEIGHT = 330; // in the drawing's own units
    var setLoad = function (load) {
      var over = load > 0.8;
      level.style.transform = 'translateY(' + (BASE - load * (BASE - DECK)).toFixed(1) + 'px)';
      plan.classList.toggle('over', over);
      dwl.textContent = 'DWL · LOAD ' + Math.round(load * 100) + '% · ' + (over ? 'REDUCE LOAD' : 'STABLE');
    };
    plan.addEventListener('pointermove', function (e) {
      var r = plan.getBoundingClientRect();
      var y = (e.clientY - r.top) / r.height * HEIGHT;
      setLoad(Math.min(0.95, Math.max(0.12, (BASE - y) / (BASE - DECK))));
      plan.classList.add('touched');
    });
    plan.addEventListener('pointerleave', function () { setLoad(0.55); });
  }

  // ---- Prototype: the brief form isn't connected yet ----
  var form = document.getElementById('brief');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var status = document.getElementById('form-status');
    var email = form.querySelector('#f-email');
    if (!email.value || !email.checkValidity()) {
      status.textContent = 'Add a work email so I can reply.';
      email.focus();
      return;
    }
    status.textContent = 'Prototype: this form will be connected in the Next.js build. For now, email dsrinivas360@gmail.com.';
  });

  // (booking button opens an email until a Cal.com link exists)
})();
