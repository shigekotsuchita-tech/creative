const menu = document.querySelector('.global-menu');
const openBtn = document.querySelector('.site-header__menu');
const closeBtn = document.querySelector('.global-menu__close');

openBtn?.addEventListener('click', () => {
  menu?.classList.add('is-open');
  menu?.setAttribute('aria-hidden', 'false');
});

closeBtn?.addEventListener('click', () => {
  menu?.classList.remove('is-open');
  menu?.setAttribute('aria-hidden', 'true');
});

document.querySelectorAll('.global-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    menu?.classList.remove('is-open');
    menu?.setAttribute('aria-hidden', 'true');
  });
});
