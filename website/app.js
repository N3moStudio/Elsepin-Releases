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

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const feedback = new Map();
  function settle(element, event) {
    if (!event || event.detail === 0 || reducedMotion.matches) return;
    const existing = feedback.get(element);
    const opacity = existing ? getComputedStyle(element).opacity : .86;
    existing?.cancel();
    const animation = element.animate([{opacity}, {opacity:1}], {duration:180,easing:'cubic-bezier(.23,1,.32,1)'});
    feedback.set(element, animation);
    animation.onfinish = () => feedback.delete(element);
  }
  // Ordinary page scrolling drives the map; no scroll interception or idle loop.
  const story = $('experience');
  const mapWrap = document.querySelector('.story-map-wrap');
  const storyDot = document.querySelector('.story-dot');
  const heroMap = document.querySelector('.hero-map-image');
  const storySteps = [...document.querySelectorAll('.story-step')];
  const states = [
    ['A place to begin', 'Search. Select. Make it yours.'],
    ['A route at your pace', 'A stop here. A different speed there.'],
    ['Worth keeping', 'Save your route. Come back anytime.']
  ];
  let frame = 0;
  let storyVisible = false;
  let heroVisible = true;
  function updateScroll() {
    frame = 0;
    if (document.hidden || reducedMotion.matches) return;
    if (heroVisible && heroMap) {
      heroMap.style.transform = `translate3d(0,${Math.min(scrollY * .12, 100)}px,0) scale(1.13) rotate(-4deg)`;
    }
    if (storyVisible && story) {
      const rect = story.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height - innerHeight)));
      mapWrap.style.transform = `translate3d(${-progress * 10}%,${progress * 7}%,0) scale(${1.15 - progress * .1})`;
      storyDot.style.transform = `translate3d(${progress * 180}px,${progress < .5 ? progress * 120 : 60}px,0)`;
      const index = storySteps.reduce((closest, step, i) => Math.abs(step.getBoundingClientRect().top) < Math.abs(storySteps[closest].getBoundingClientRect().top) ? i : closest, 0);
      if (story.dataset.step !== String(index)) {
        story.dataset.step = String(index);
        $('story-state').textContent = states[index][0];
        $('story-detail').textContent = states[index][1];
        document.querySelector('.story-count').textContent = `0${index+1} / 03`;
      }
    }
  }
  function requestScroll() { if (!frame && !reducedMotion.matches && !document.hidden && (heroVisible || storyVisible)) frame = requestAnimationFrame(updateScroll); }
  if (story) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.target === story) storyVisible = entry.isIntersecting;
        else heroVisible = entry.isIntersecting;
      }
      requestScroll();
    });
    observer.observe(story); observer.observe(document.querySelector('.hero'));
    addEventListener('scroll', requestScroll, {passive:true});
    addEventListener('resize', requestScroll, {passive:true});
    document.addEventListener('visibilitychange', requestScroll);
  }
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) {
      cancelAnimationFrame(frame); frame = 0;
      feedback.forEach(animation => animation.cancel());
      feedback.clear();
      if (heroMap) heroMap.style.transform = '';
      if (mapWrap) mapWrap.style.transform = '';
      if (storyDot) storyDot.style.transform = '';
    } else requestScroll();
  });

  // One live studio moves into the native dialog, preserving state and IDs.
  const dialog = $('preview-dialog');
  let previewTrigger, previousScroll = 0, dialogAnimation;
  if (dialog) {
    const studio = $('studio-body'), slot = $('studio-slot');
    document.querySelectorAll('[data-open-preview]').forEach(button => button.addEventListener('click', event => {
      if (dialog.open) return;
      previewTrigger = button; previousScroll = scrollY; closeMenu();
      slot.style.minHeight = slot.offsetHeight + 'px';
      $('dialog-body').append(studio);
      document.body.classList.add('preview-open');
      dialog.showModal(); dialog.scrollTop = 0;
      $('close-preview').focus({preventScroll:true});
      if (!reducedMotion.matches && event.detail !== 0) {
        dialogAnimation = dialog.animate([{opacity:0,transform:'translateY(10px) scale(.97)'},{opacity:1,transform:'none'}], {duration:250,easing:'cubic-bezier(.23,1,.32,1)'});
      }
    }));
    $('close-preview').addEventListener('click', () => dialog.close());
    document.querySelector('.dialog-close-bottom').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const r = dialog.getBoundingClientRect();
      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      dialogAnimation?.cancel(); slot.append(studio); slot.style.minHeight = '';
      document.body.classList.remove('preview-open');
      scrollTo({top:previousScroll,behavior:'instant'});
      (previewTrigger?.getClientRects().length ? previewTrigger : menu)?.focus({preventScroll:true});
    });
    reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) dialogAnimation?.cancel(); });
  }

  if (!$('phone')) return;
  const catalog = window.ELSEPIN_CATALOG;
  if (!catalog?.themes?.length || !catalog?.icons?.length) {
    $('mode-help').textContent = 'The appearance preview could not load. Reload to try again; the guide and links still work.';
    $('mode-help').setAttribute('role','status');
    return;
  }
  const deviceDark = matchMedia('(prefers-color-scheme: dark)');
  let selectedTheme = catalog.defaults.theme;
  let selectedIcon = catalog.defaults.icon;
  let demoActive = false;
  const places = {
    waterfront: {name:'Waterfront',x:241,y:119,path:'M64 186h152v-67h25'},
    gardens: {name:'Garden Gate',x:117,y:62,path:'M64 186h26V62h27'},
    riverside: {name:'Riverside',x:278,y:260,path:'M64 186h26v49h188v25'}
  };
  function selectPlace(id) {
    const place = places[id];
    $('tray-title').textContent = place.name;
    $('preview-route').setAttribute('d',place.path);
    $('phone').style.setProperty('--demo-x',(place.x - 64) + 'px');
    $('phone').style.setProperty('--demo-y',(place.y - 186) + 'px');
    document.querySelectorAll('[data-place]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.place === id)));
    demoActive = false; paintDemo();
  }
  const announce = message => { $('preview-announcement').textContent = message; };

  function paint(event) {
    const theme = catalog.themes.find(item => item.id === selectedTheme);
    const deviceMode = $('mode').value === 'system' ? (deviceDark.matches ? 'dark' : 'light') : $('mode').value;
    const mode = theme.mode === 'system' ? deviceMode : theme.mode;
    const palette = theme[mode];
    Object.entries(palette).forEach(([key,value]) => $('phone').style.setProperty('--'+key,value));
    $('phone').style.setProperty('--road', `color-mix(in srgb, ${palette.muted} 22%, ${palette.surface})`);
    $('phone').style.setProperty('--park', `color-mix(in srgb, ${palette.accent} 9%, ${palette.surface})`);
    $('phone').style.setProperty('--water', `color-mix(in srgb, ${palette.accent} 16%, ${palette.canvas})`);
    $('phone').style.colorScheme = mode;
    $('phone').classList.toggle('glass', $('surface').value === 'glass');
    $('theme-name').textContent = theme.title;
    $('theme-detail').textContent = theme.detail;
    $('settings-theme').textContent = theme.title + ' · ' + ($('surface').value === 'glass' ? 'Glass' : 'Solid');
    $('mode').disabled = theme.mode !== 'system';
    $('mode-help').textContent = theme.mode === 'system'
      ? 'Glacier follows your device. This control previews a device setting; it does not change your browser’s appearance.'
      : `${theme.title} uses ${mode} appearance. Choose Glacier to preview your device’s light and dark settings.`;
    $('swatches').replaceChildren(...['accent','surface','text'].map(key => {
      const swatch = document.createElement('span'); swatch.style.background = palette[key]; return swatch;
    }));
    document.querySelectorAll('[data-theme]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.theme === selectedTheme)));
    if (event) announce(`${theme.title} theme, ${mode} appearance, ${$('surface').value} surfaces.`);
    settle($('phone'), event);
  }
  function chooseIcon(id, event) {
    selectedIcon = id;
    const icon = catalog.icons.find(item => item.id === id);
    for (const target of ['preview-icon','phone-icon']) $(target).src = `assets/${id}.png`;
    $('preview-icon').alt = icon.title + ', selected app icon';
    $('icon-name').textContent = icon.title;
    $('selected-icon-label').textContent = icon.title;
    document.querySelectorAll('[data-icon]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.icon === id)));
    if (event) announce(icon.title + ' icon selected.');
    settle($('preview-icon'), event);
  }
  function chooseScreen(screen, event) {
    document.querySelectorAll('.phone-screen').forEach(panel => { panel.hidden = panel.id !== 'screen-' + screen; });
    document.querySelectorAll('.phone-tabs button').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.screen === screen)));
    $('phone').dataset.screen = screen;
    if (event) announce(screen[0].toUpperCase() + screen.slice(1) + ' illustration.');
    settle($('screen-' + screen), event);
  }
  function paintDemo() {
    $('phone').dataset.demoActive = String(demoActive);
    $('demo-status').textContent = demoActive ? 'Preview holding · no real location changed' : 'Pin selected · illustration only';
    $('demo-teleport').querySelector('span').textContent = demoActive ? 'Stop preview' : 'Preview teleport';
    $('demo-teleport').querySelector('use').setAttribute('href','symbols.svg#' + (demoActive ? 'stop' : 'play'));
    $('demo-teleport').setAttribute('aria-pressed', String(demoActive));
  }

  catalog.themes.forEach(theme => {
    const button = document.createElement('button');
    button.type = 'button'; button.dataset.theme = theme.id;
    button.setAttribute('aria-label',theme.title); button.setAttribute('aria-pressed',String(theme.id === selectedTheme));
    const chips = document.createElement('span'); chips.className = 'theme-chips'; chips.setAttribute('aria-hidden','true');
    const palette = theme[theme.mode === 'dark' ? 'dark' : 'light'];
    for (const key of ['accent','surface','text']) { const chip = document.createElement('i'); chip.style.background = palette[key]; chips.append(chip); }
    button.append(chips,document.createTextNode(theme.title));
    button.addEventListener('click', event => { selectedTheme = theme.id; paint(event); });
    $('themes').append(button);
  });
  catalog.icons.forEach(icon => {
    const button = document.createElement('button');
    button.type = 'button'; button.dataset.icon = icon.id; button.title = icon.title;
    button.setAttribute('aria-label',icon.title); button.setAttribute('aria-pressed',String(icon.id === selectedIcon));
    const img = document.createElement('img'); img.src = `assets/${icon.id}.png`; img.alt = ''; img.width = 64; img.height = 64; img.loading = 'lazy';
    button.append(img); button.addEventListener('click', event => chooseIcon(icon.id,event)); $('icons').append(button);
  });
  $('surface').disabled = false;
  $('surface').addEventListener('change', event => paint(event));
  $('mode').addEventListener('change', event => paint(event));
  deviceDark.addEventListener('change', () => paint());
  document.querySelectorAll('.phone-tabs button').forEach(button => {
    button.disabled = false; button.addEventListener('click', event => chooseScreen(button.dataset.screen,event));
  });
  $('demo-teleport').disabled = false;
  document.querySelectorAll('[data-place]').forEach(button => {
    button.disabled = false;
    button.addEventListener('click', () => { selectPlace(button.dataset.place); announce($('tray-title').textContent + ' selected in the illustration.'); });
  });
  $('demo-teleport').addEventListener('click', () => { demoActive = !demoActive; paintDemo(); announce(demoActive ? 'Illustration only. Your location has not changed.' : 'Preview stopped.'); });
  $('reset-preview').disabled = false;
  $('reset-preview').addEventListener('click', event => {
    feedback.forEach(animation => animation.cancel()); feedback.clear();
    selectedTheme = catalog.defaults.theme; $('mode').value = 'system'; $('surface').value = catalog.defaults.material;
    selectPlace('waterfront'); chooseIcon(catalog.defaults.icon); chooseScreen('map'); paint(event);
    announce('Preview reset to Bloom, solid surfaces, Prism Jumpgate, and the Map screen. No real location changed.');
  });
  chooseIcon(selectedIcon); selectPlace('waterfront'); paint();
  document.body.dataset.previewReady = 'true';
})();
