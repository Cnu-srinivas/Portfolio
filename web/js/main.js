/* Small progressive enhancements. The page works without this file. */
(function () {
  var root = document.documentElement;
  var motionOK = !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var each = function (sel, fn, scope) { Array.prototype.forEach.call((scope || document).querySelectorAll(sel), fn); };

  // ---- Theme toggle: remembers the visitor's choice; otherwise follows the OS ----
  function currentTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
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
      if (next === 'dark') root.setAttribute('data-theme', 'dark'); else root.removeAttribute('data-theme');
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
        setTimeout(function () { el.classList.remove('reveal', 'in'); el.style.removeProperty('--d'); }, 900);
      });
    }, { threshold: 0, rootMargin: '0px 0px 20% 0px' });   // start just before a block enters, so a fast scroll never lands on a blank area
    each('.section-head, .usecases, .case, .more li, .sim, .principles li, .offer, .snapshot, .steps li, .term, .faq > div, .tz, ' +
         '.about-text, .timeline li, .beyond, .stack-group, .contact-intro, form.brief', function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      var i = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.setProperty('--d', Math.min(i % 4, 2));
      el.classList.add('reveal');
      revealer.observe(el);
    });
  }

  // ---- Figures count up once: hero figures at load, case metrics when their card arrives ----
  function countUp(el, delay) {
    var end = parseFloat(el.getAttribute('data-count'));
    var dec = +(el.getAttribute('data-dec') || 0);
    var pre = el.getAttribute('data-pre') || '', suf = el.getAttribute('data-suf') || '';
    var start = null;
    function step(t) {
      if (start === null) start = t;
      var p = Math.min(1, (t - start) / 1300);
      el.textContent = pre + (end * (1 - Math.pow(1 - p, 3))).toFixed(dec) + suf;
      if (p < 1) window.requestAnimationFrame(step);
    }
    el.textContent = pre + (0).toFixed(dec) + suf;
    setTimeout(function () { window.requestAnimationFrame(step); }, delay);
  }
  if (motionOK) {
    each('.proof [data-count]', function (el) { countUp(el, 450); });
    if ('IntersectionObserver' in window) {
      var counter = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          counter.unobserve(entry.target);
          each('[data-count]', function (el, i) { countUp(el, 120 + i * 90); }, entry.target);
        });
      }, { threshold: 0.1 });
      each('.case .metrics', function (m) { counter.observe(m); });
    }
  }

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

  // ---- What I build: filter the eight systems by industry ----
  // Each card lists the industries it fits in data-fits; "all" fits every industry.
  var filter = document.querySelector('.filter');
  if (filter) {
    var cards = Array.prototype.slice.call(document.querySelectorAll('.usecase[data-fits]'));
    var fcount = document.querySelector('.fcount');
    filter.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (!chip) return;
      var key = chip.getAttribute('data-f');
      filter.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', String(c === chip)); });
      var hits = 0;
      cards.forEach(function (card) {
        var fits = (' ' + card.getAttribute('data-fits') + ' ');
        var hit = key === 'all' || fits.indexOf(' all ') > -1 || fits.indexOf(' ' + key + ' ') > -1;
        card.classList.toggle('dimmed', !hit);
        card.classList.toggle('hit', hit && key !== 'all');
        if (hit) hits++;
      });
      if (fcount) fcount.textContent = key === 'all' ? '' : hits + ' of ' + cards.length + ' systems fit ' + chip.textContent.trim().toLowerCase() + ' teams';
    });
  }

  // ---- How I build: run the assistant through a scenario ----
  // Each step: [stage, state, log line, ms from start]. Stages not in a scenario are marked skipped at the end.
  var sim = document.getElementById('sim');
  if (sim) {
    var SCENARIOS = {
      normal: { steps: [
          ['req', 'ok', 'request · "Knee still sore after squats, what should I change?" · 38 tokens', 0],
          ['guard', 'ok', 'guardrail · in scope: self-managed physio', 260],
          ['ctx', 'ok', 'context · rolling summary 612 / 1,200 token budget', 480],
          ['route', 'ok', 'router → primary model', 640],
          ['m1', 'run', 'gemini-2.5-flash · streaming…', 760],
          ['m1', 'ok', 'first token at 1.46 s', 1460],
          ['json', 'ok', 'JSON contract · schema valid', 2050],
          ['out', 'ok', 'response delivered · logged 1,184 tokens · $0.0049', 2250]],
        tele: ['1.46 s', '1,184', '$0.0049', 'Answered', 'good'], skip: ['esc', 'm2', 'kw'], rules: [1, 3, 4, 6] },
      outage: { steps: [
          ['req', 'ok', 'request · "Can I swap lunges for step-ups this week?" · 31 tokens', 0],
          ['guard', 'ok', 'guardrail · in scope: self-managed physio', 260],
          ['ctx', 'ok', 'context · rolling summary 540 / 1,200 token budget', 480],
          ['route', 'ok', 'router → primary model', 640],
          ['m1', 'run', 'gemini-2.5-flash · waiting…', 760],
          ['m1', 'fail', 'primary timed out after 3.0 s · failing over', 1900],
          ['m2', 'run', 'secondary model · streaming…', 2100],
          ['m2', 'ok', 'first token at 3.9 s (includes the timeout)', 2700],
          ['json', 'ok', 'JSON contract · schema valid', 3200],
          ['out', 'ok', 'response delivered · failover logged for review', 3400]],
        tele: ['3.9 s', '1,096', '$0.0053', 'Answered via failover', 'good'], skip: ['esc', 'kw'], rules: [3, 5, 6] },
      down: { steps: [
          ['req', 'ok', 'request · "How many sets of bridges today?" · 22 tokens', 0],
          ['guard', 'ok', 'guardrail · in scope: self-managed physio', 260],
          ['ctx', 'ok', 'context · rolling summary 498 / 1,200 token budget', 480],
          ['route', 'ok', 'router → primary model', 640],
          ['m1', 'fail', 'primary · 503 unavailable', 1200],
          ['m2', 'fail', 'secondary · 503 unavailable', 1700],
          ['kw', 'ok', 'keyword fallback · matched "sets" → program lookup', 2000],
          ['json', 'ok', 'JSON contract · schema valid', 2250],
          ['out', 'ok', "safe reply from this week's program · no model cost", 2400]],
        tele: ['0.0 s', '22', '$0.0000', 'Fallback reply', 'warn'], skip: ['esc'], rules: [3, 5] },
      flag: { steps: [
          ['req', 'ok', 'request · "Sharp chest pain when I exercise, what stretch helps?" · 29 tokens', 0],
          ['guard', 'warn', 'guardrail · red flag: outside self-managed physio', 420],
          ['esc', 'ok', 'escalate · advise seeing a doctor, no home remedy', 900],
          ['out', 'ok', 'escalation message delivered · event logged', 1200]],
        tele: ['—', '29', '$0.0000', 'Escalated to doctor', 'warn'], skip: ['ctx', 'route', 'm1', 'm2', 'kw', 'json'], rules: [1, 3] }
    };
    var stages = {}, arrows = Array.prototype.slice.call(sim.querySelectorAll('.ar'));
    each('.stg', function (el) { stages[el.getAttribute('data-k')] = el; }, sim);
    var arrowAfter = { req: 0, guard: 1, ctx: 2, route: 3, m1: 4, m2: 4, kw: 4, json: 5 };
    var log = sim.querySelector('.console');
    var buttons = Array.prototype.slice.call(sim.querySelectorAll('.scn'));
    var tele = function (k) { return sim.querySelector('[data-t="' + k + '"]'); };
    var timers = [], running = false;
    var clock = function (ms) { return (ms / 1000).toFixed(3).replace(/^(\d)\./, '0$1.'); };

    function resetSim() {
      timers.forEach(clearTimeout); timers = [];
      Object.keys(stages).forEach(function (k) { stages[k].classList.remove('run', 'ok', 'fail', 'warn', 'skip'); });
      arrows.forEach(function (a) { a.classList.remove('hot'); });
      each('#rules li', function (li) { li.classList.remove('glow'); });
      log.innerHTML = '';
    }
    function applyStep(step) {
      var k = step[0], state = step[1], msg = step[2], t = step[3];
      var st = stages[k];
      st.classList.remove('run', 'ok', 'fail', 'warn');
      st.classList.add(state);
      if (state === 'ok' && arrowAfter[k] !== undefined) arrows[arrowAfter[k]].classList.add('hot');
      each('.cur', function (x) { x.classList.remove('cur'); }, log);
      var li = document.createElement('li');
      var time = document.createElement('span'); time.className = 't'; time.textContent = clock(t);
      var text = document.createElement('span');
      text.className = (state === 'fail' || state === 'warn') ? 'bad' : (state === 'ok' ? 'ok' : '');
      if (state === 'run') text.classList.add('cur');
      text.textContent = msg;
      li.appendChild(time); li.appendChild(text); log.appendChild(li);
      log.scrollTop = log.scrollHeight;
    }
    function finish(sc) {
      sc.skip.forEach(function (k) { stages[k].classList.add('skip'); });
      sc.rules.forEach(function (r) { var li = document.querySelector('#rules li[data-r="' + r + '"]'); if (li) li.classList.add('glow'); });
      tele('lat').textContent = sc.tele[0]; tele('tok').textContent = sc.tele[1]; tele('cost').textContent = sc.tele[2];
      var out = tele('out'); out.textContent = sc.tele[3]; out.className = sc.tele[4];
      running = false;
      buttons.forEach(function (b) { b.disabled = false; });
    }
    function runSim(name, animate) {
      var sc = SCENARIOS[name];
      resetSim();
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-s') === name)); });
      if (!animate || !motionOK) { sc.steps.forEach(applyStep); finish(sc); return; }
      running = true;
      buttons.forEach(function (b) { b.disabled = true; });
      ['lat', 'tok', 'cost'].forEach(function (k) { tele(k).textContent = '…'; });
      var out = tele('out'); out.textContent = 'Running'; out.className = '';
      sc.steps.forEach(function (st) { timers.push(setTimeout(function () { applyStep(st); }, st[3] + 150)); });
      timers.push(setTimeout(function () { finish(sc); }, sc.steps[sc.steps.length - 1][3] + 500));
    }
    buttons.forEach(function (b) { b.addEventListener('click', function () { if (!running) runSim(b.getAttribute('data-s'), true); }); });
    runSim('normal', false);
    if (motionOK && 'IntersectionObserver' in window) {
      var simWatcher = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { simWatcher.disconnect(); runSim('normal', true); }
      }, { threshold: 0.4 });
      simWatcher.observe(sim);
    }
  }

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

  // (booking buttons open the Calendly page: https://calendly.com/dsrinivas360/30min)
})();
