// visual_text fade in
const fadeEls = document.querySelectorAll(".visual .visual_text");

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
    x: 0,
  });
});

// Swiper
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: false,
    center: true,
    smartspeed: 500,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
});

// TAB menu
const tabItem = document.querySelectorAll(".tab-container__item");
const tabContent = document.querySelectorAll(".content-container__content");

tabItem.forEach((item) => {
  item.addEventListener("click", tabHandler);
});

function tabHandler(item) {
  const tabTarget = item.currentTarget;
  const target = tabTarget.dataset.tab;
  tabItem.forEach((title) => {
    title.classList.remove("active");
  });
  tabContent.forEach((target) => {
    target.classList.remove("target");
  });
  document.querySelector("#" + target).classList.add("target");
  tabTarget.classList.add("active");
}

// scroll gsap
gsap.registerPlugin(ScrollTrigger);

gsap.to(".solution_title", {
  y: -60,
  opacity: 1,
  duration: 2,
  scrollTrigger: {
    trigger: ".solution",
    toggleActions: "restart pause resume none",
    // markers: true,
  },
});

gsap.to(".solution_cont.cont1", {
  y: -60,
  opacity: 1,
  delay: 0.3,
  duration: 2,
  scrollTrigger: {
    trigger: ".solution_cont.cont1",
    toggleActions: "restart pause resume none",
    // markers: true,
  },
});

gsap.to(".solution_cont.cont2", {
  y: -60,
  opacity: 1,
  delay: 0.32,
  duration: 2,
  scrollTrigger: {
    trigger: ".solution_cont.cont2",
    toggleActions: "restart pause resume none",
    // markers: true,
  },
});

gsap.to(".solution_cont.cont3", {
  y: -60,
  opacity: 1,
  delay: 0.35,
  duration: 2,
  scrollTrigger: {
    trigger: ".solution_cont.cont3",
    toggleActions: "restart pause resume none",
    // markers: true,
  },
});

gsap.to(".point.two img", {
  y: -100,
  opacity: 1,
  duration: 2,
  scrollTrigger: {
    trigger: ".point.two",
    toggleActions: "restart pause resume none",
  },
});

gsap.to(".point.three img", {
  y: -100,
  opacity: 1,
  duration: 2,
  scrollTrigger: {
    trigger: ".point.three",
    toggleActions: "restart pause resume none",
  },
});

gsap.to(".point.four img", {
  y: -100,
  opacity: 1,
  duration: 2,
  scrollTrigger: {
    trigger: ".point.four",
    toggleActions: "restart pause resume none",
  },
});
