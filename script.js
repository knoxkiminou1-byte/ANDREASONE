const logoButton = document.getElementById('logoButton');
const logoWrap = document.querySelector('.logo-wrap');

if (logoButton && logoWrap) {
  const triggerImpact = () => {
    logoWrap.classList.remove('hit-active');
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

  logoWrap.addEventListener('animationend', (event) => {
    if (event.animationName === 'logoImpact') {
      logoWrap.classList.remove('hit-active');
    }
  });
}
