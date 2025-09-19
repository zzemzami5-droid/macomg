document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('.hamburger-pro');
  const navMenu = document.getElementById('nav-menu-pro');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', String(!expanded));
      if (expanded) {
        navMenu.style.display = 'none';
      } else {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '56px';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.backgroundColor = '#0b3d91';
        navMenu.style.padding = '1rem';
        navMenu.style.zIndex = '150';
      }
    });
  }

  // Globe button handler
  const globeBtn = document.querySelector('.globe-btn-pro');
  if (globeBtn) {
    globeBtn.addEventListener('click', () => {
      alert('Language/region selector clicked. Implement as needed.');
    });
  }
});
