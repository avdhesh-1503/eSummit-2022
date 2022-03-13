// owlCarousel

$(document).ready(function () {

  $("#owl-demo").owlCarousel({

    autoPlay: 5000, //Set AutoPlay to 3 seconds
    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3]

  });
});

// Speakers
const speakers = [
  {
    name: "Name",
    designation: "Designation",
    image: "img/1.jpeg",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,`
  },
  {
    name: "Name",
    designation: "Designation",
    image: "img/1.jpeg",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,`
  },
  {
    name: "Name",
    designation: "Designation",
    image: "img/1.jpeg",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,`
  },
  {
    name: "Name",
    designation: "Designation",
    image: "img/1.jpeg",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,`
  },
  {
    name: "Name",
    designation: "Designation",
    image: "img/1.jpeg",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,`
  },
  {
    name: "Name",
    designation: "Designation",
    image: "img/1.jpeg",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,`
  }
]

$(document).ready(function () {
  speakers.forEach((speaker, index) => {
    const html = `
    <div class="speaker-item">
    <div data-aos="fade-${index % 2 === 0 ? "left" : "right"}" data-aos-duration="2000" class="speaker-img">
      <img src="${speaker.image}" alt="" />
    </div>
    <div data-aos="fade-${index % 2 === 0 ? "right" : "left"}" data-aos-duration="2000" class="speaker-text">
      <h3>${speaker.name}</h3>
      <span>${speaker.designation}</span>
      <p>
        ${speaker.content}
      </p>
    </div>
  </div>
    `;
  $("#speaker-content").append(html);

  });
})