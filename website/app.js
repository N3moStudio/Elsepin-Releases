'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const menu = document.querySelector('.nav-toggle');
  const navigation = $('navigation');
  document.documentElement.classList.add('js');

  // Navigation works on every page, even if the optional preview catalog fails.
  function closeMenu(restoreFocus = false) {
    if (!menu) return;
    menu.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
    if (restoreFocus) menu.focus();
  }
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('open', open);
  });
  navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', event => {
    document.documentElement.classList.add('keyboard-input');
    if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  document.addEventListener('pointerdown', () => document.documentElement.classList.remove('keyboard-input'), {passive:true});
  matchMedia('(min-width: 761px)').addEventListener('change', () => closeMenu());

})();
