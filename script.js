const logoButton = document.getElementById('logoButton');
const logoWrap = document.querySelector('.logo-wrap');
const pendulum = document.getElementById('pendulum');

if (logoButton && logoWrap && pendulum) {
  let hitTimer;

  const triggerImpact = () => {
    clearTimeout(hitTimer);
    logoWrap.classList.remove('hit-active', 'knocked-out');
    void logoWrap.offsetWidth;
    logoWrap.classList.add('hit-active');

    hitTimer = setTimeout(() => {
      logoWrap.classList.add('knocked-out');
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
    if (event.animationName === 'logoKnockOut') {
      clearTimeout(hitTimer);
      logoWrap.classList.remove('hit-active', 'knocked-out');
    }
  });
}
