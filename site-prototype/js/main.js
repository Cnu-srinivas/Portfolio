/* Small progressive enhancements. The page works without this file. */
(function () {
  var root = document.documentElement;

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
