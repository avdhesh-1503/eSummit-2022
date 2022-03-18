const items = document.querySelectorAll('#timeline li');

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

const register = () => {
  document.querySelector('.warplanes').classList.add('clicked');
  setTimeout(() => {
    window.location.href =
      'https://dare2compete.com/competition/unravel-the-case-study-competition-e-summit-22-netaji-subhas-university-of-technology-nsut-delhi-275136';
  }, 750);
};

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
document.querySelector('.register-btn').addEventListener('click', register);
