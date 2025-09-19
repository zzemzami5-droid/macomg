const hamburgerBtn = document.createElement('button');
hamburgerBtn.className = 'hamburger-custom';
hamburgerBtn.setAttribute('aria-label', 'Toggle menu');
hamburgerBtn.setAttribute('aria-expanded', 'false');
hamburgerBtn.innerHTML = '&#9776;';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container-custom');
  const nav = document.querySelector('.nav-custom');

  if (container && nav) {
    container.insertBefore(hamburgerBtn, nav);

    hamburgerBtn.addEventListener('click', () => {
      const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', String(!expanded));
      if (expanded) {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '56px';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.backgroundColor = '#111827';
        nav.style.padding = '1rem';
        nav.style.zIndex = '120';
      }
    });
  }

  // Globe button handler
  const globeBtn = document.querySelector('.globe-btn-custom');
  if (globeBtn) {
    globeBtn.addEventListener('click', () => {
      alert('Language/region selector clicked. Implement as needed.');
    });
  }
});
