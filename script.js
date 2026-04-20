const logoButton = document.getElementById('logoButton');
const logoWrap = document.querySelector('.logo-wrap');
const pendulum = document.getElementById('pendulum');

if (logoButton && logoWrap && pendulum) {
  const triggerImpact = () => {
    logoWrap.classList.remove('hit-active', 'knocked-out');
    void logoWrap.offsetWidth;
    logoWrap.classList.add('hit-active');
  };

  logoButton.addEventListener('click', triggerImpact);
  logoButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      triggerImpact();
    }
  });

  pendulum.addEventListener('animationend', (event) => {
    if (event.animationName === 'pendulumHit') {
      logoWrap.classList.add('knocked-out');
    }
  });

  logoWrap.addEventListener('animationend', (event) => {
    if (event.animationName === 'logoKnockOut') {
      logoWrap.classList.remove('hit-active', 'knocked-out');
    }
  });
}
