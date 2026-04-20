const logoButton = document.getElementById('logoButton');
const logoWrap = document.querySelector('.logo-wrap');
const pendulum = document.getElementById('pendulum');
const heroScene = document.getElementById('heroScene');
const siteContent = document.getElementById('siteContent');

if (logoButton && logoWrap && pendulum && heroScene && siteContent) {
  let hitTimer;
  let enterSiteTimer;
  let siteOpened = false;

  const openSite = () => {
    heroScene.classList.add('hero-swirl-out');

    enterSiteTimer = setTimeout(() => {
      document.body.classList.add('site-active');
      siteContent.focus?.();
      siteOpened = true;
    }, 1150);
  };

  const triggerImpact = () => {
    if (siteOpened) {
      return;
    }

    clearTimeout(hitTimer);
    clearTimeout(enterSiteTimer);

    logoWrap.classList.remove('hit-active', 'knocked-out');
    heroScene.classList.remove('hero-swirl-out');

    void logoWrap.offsetWidth;
    logoWrap.classList.add('hit-active');

    hitTimer = setTimeout(() => {
      logoWrap.classList.add('knocked-out');
      openSite();
    }, 860);
  };

  logoButton.addEventListener('click', triggerImpact);
  logoButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      triggerImpact();
    }
  });

  logoWrap.addEventListener('animationend', (event) => {
    if (event.animationName === 'logoKnockOut' && !siteOpened) {
      logoWrap.classList.remove('hit-active', 'knocked-out');
    }
  });
}
