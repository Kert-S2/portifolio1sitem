// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const navMobile = document.getElementById('navMobile');

if (menuToggle && navMobile) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Abas do cardápio
const tabs = document.querySelectorAll('.tab');
const items = document.querySelectorAll('.menu-item');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const category = tab.dataset.cat;

    tabs.forEach((t) => {
      t.classList.toggle('is-active', t === tab);
      t.setAttribute('aria-selected', String(t === tab));
    });

    items.forEach((item) => {
      item.hidden = item.dataset.cat !== category;
    });
  });
});
