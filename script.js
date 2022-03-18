// owlCarousel
$(document).ready(function () {
  $('#owl-demo').owlCarousel({
    autoPlay: 5000, //Set AutoPlay to 3 seconds
    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
  });
});

// Sticky menu background
window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    document.querySelector('.navbar').classList.add('scroll');
  } else {
    document.querySelector('.navbar').classList.remove('scroll');
  }
});

// Smooth Scrolling
$('.navbar a, .nav-link').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 50,
      },
      800
    );
  }
});

// Scrollspy
(function () {
  'use strict';

  var section = document.querySelectorAll('.section');
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function () {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition + 50) {
        document.querySelector('.active').setAttribute('class', ' ');
        document
          .querySelector('a[href*=' + i + ']')
          .setAttribute('class', 'active');
      }
    }
  };
})();
