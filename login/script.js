document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('togglePassword');
  const password = document.getElementById('password');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (toggle && password) {
    toggle.addEventListener('click', () => {
      const isHidden = password.getAttribute('type') === 'password';
      password.setAttribute('type', isHidden ? 'text' : 'password');
      const nextState = isHidden ? 'true' : 'false';
      toggle.setAttribute('aria-pressed', nextState);
      toggle.setAttribute('aria-label', isHidden ? 'Ocultar contraseña' : 'Mostrar contraseña');
    });
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.hidden = expanded;
    });

    // Close menu on outside click (mobile)
    document.addEventListener('click', (e) => {
      if (!mobileMenu.hidden && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.hidden = true;
      }
    });
  }
});

