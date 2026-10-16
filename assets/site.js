(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  const langButtons = [...document.querySelectorAll('[data-set-lang]')];

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('open', !isOpen);
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        menuButton.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      }
    });
  }

  function setLanguage(language) {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-de][data-en]').forEach((element) => {
      element.innerHTML = element.dataset[language];
    });
    document.querySelectorAll('[data-aria-de][data-aria-en]').forEach((element) => {
      element.setAttribute('aria-label', element.dataset[`aria${language.charAt(0).toUpperCase()}${language.slice(1)}`]);
    });
    langButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.setLang === language));
    });
    const title = document.body.dataset[`title${language.charAt(0).toUpperCase()}${language.slice(1)}`];
    if (title) document.title = title;
    document.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')) return;
      const target = new URL(href, location.href);
      if (language === 'en') target.searchParams.set('lang', 'en');
      else target.searchParams.delete('lang');
      link.href = `${target.pathname.split('/').pop()}${target.search}${target.hash}`;
    });
  }

  langButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.setLang)));
  const initialLanguage = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'de';
  setLanguage(initialLanguage);
})();

