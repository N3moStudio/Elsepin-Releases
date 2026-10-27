'use strict';
(() => {
  const catalog = window.ELSEPIN_CATALOG;
  if (!catalog) return;
  const $ = id => document.getElementById(id);
  let selectedTheme = 'ion';
  let selectedIcon = 'ElsepinIcon-PrismJumpgate-Default';
  let demoActive = false;
  const fonts = {system:'Arial,Helvetica,sans-serif',rounded:'ui-rounded,"Arial Rounded MT Bold",Arial,sans-serif',serif:'Georgia,serif',monospaced:'ui-monospace,Consolas,monospace'};
  function paint() {
    const theme = catalog.themes.find(t => t.id === selectedTheme);
    const mode = $('mode').value === 'theme' ? theme.mode : $('mode').value;
    const palette = theme[mode === 'light' ? 'light' : 'dark'];
    Object.entries(palette).forEach(([key,value]) => $('phone').style.setProperty('--'+key,value));
    $('phone').style.setProperty('--map', mode === 'light' ? palette.canvas : palette.surface);
    $('phone').style.setProperty('--water', palette.canvas);
    $('phone').style.setProperty('--road', `color-mix(in srgb, ${palette.muted} 19%, ${palette.surface})`);
    $('phone').style.setProperty('--park', `color-mix(in srgb, ${palette.accent} 8%, ${palette.surface})`);
    const font = $('font').value === 'theme' ? theme.font : $('font').value;
    $('phone').style.setProperty('--phone-font', fonts[font] || fonts.system);
    $('phone').classList.toggle('glass', $('surface').value === 'glass');
    $('theme-name').textContent = theme.title;
    $('theme-detail').textContent = theme.detail;
    $('theme-eyebrow').textContent = theme.eyebrow;
    $('settings-theme').textContent = theme.title+' · '+($('surface').value === 'glass' ? 'Glass' : 'Solid');
    $('swatches').replaceChildren(...['accent','surface','text'].map(key => { const s=document.createElement('span'); s.style.background=palette[key]; return s; }));
    document.querySelectorAll('[data-theme]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.theme === selectedTheme)));
    $('preview-announcement').textContent = theme.title+' theme, '+mode+' appearance.';
  }
  catalog.themes.forEach(theme => {
    const button=document.createElement('button');button.type='button';button.textContent=theme.title;button.dataset.theme=theme.id;
    button.setAttribute('aria-pressed',String(theme.id===selectedTheme));
    button.addEventListener('click',()=>{selectedTheme=theme.id;paint();});$('themes').append(button);
  });
  catalog.icons.forEach(icon => {
    const button=document.createElement('button');button.type='button';button.setAttribute('aria-label',icon.title);button.setAttribute('aria-pressed',String(icon.id===selectedIcon));
    const img=document.createElement('img');img.src='assets/'+icon.id+'.png';img.alt='';img.width=64;img.height=64;img.loading='lazy';button.append(img);
    button.addEventListener('click',()=>{
      selectedIcon=icon.id;$('phone-icon').src=img.src;$('icon-name').textContent=icon.title;
      document.querySelectorAll('#icons button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    });$('icons').append(button);
  });
  ['mode','surface','font'].forEach(id=>$(id).addEventListener('change',paint));
  $('reset-preview').addEventListener('click',()=>{selectedTheme='ion';$('mode').value='theme';$('font').value='theme';$('surface').value='solid';demoActive=false;$('demo-status').textContent='● Ready · Pin selected';$('demo-teleport').textContent='Teleport';document.querySelector('#icons button').click();document.querySelector('.phone-tabs button').click();paint();});
  document.querySelectorAll('.phone-tabs button').forEach(button=>button.addEventListener('click',()=>{
    const screen=button.dataset.screen;
    document.querySelectorAll('.phone-screen').forEach(panel=>{panel.hidden=panel.id!=='screen-'+screen;});
    document.querySelectorAll('.phone-tabs button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    $('phone').dataset.screen=screen;
  }));
  $('demo-teleport').addEventListener('click',()=>{demoActive=!demoActive;$('demo-status').textContent=demoActive?'● Preview active · No real location changed':'● Ready · Pin selected';$('demo-teleport').textContent=demoActive?'Stop preview':'Teleport';$('preview-announcement').textContent=demoActive?'Illustration only. Your location has not changed.':'Preview stopped.';});
  const menu=document.querySelector('.nav-toggle');
  menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));$('navigation').classList.toggle('open',open);});
  $('navigation').querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');$('navigation').classList.remove('open');}));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){menu.setAttribute('aria-expanded','false');$('navigation').classList.remove('open');menu.focus();}});
  paint();
})();
