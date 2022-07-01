const currentYearEl = (document.querySelector(".current-year").textContent =
  new Date().getFullYear());

//////////////////////////////////////////
// IMPLEMENT SMOOTH SCROLLING
const headerEl = document.querySelector(".header");
const allLinks = document.querySelectorAll(".nav-link:link");
allLinks.forEach(function (a) {
  a.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = a.getAttribute("href");
    if (href != "#" && href.startsWith("#")) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });

      headerEl.classList.toggle("nav-open");
    }
  });
});

//////////////////////////////////////////
// IMPLEMENT SMART NAVIGATION
lastScrollTop = 0;
window.addEventListener("scroll", function () {
  var currentPosition = window.pageYOffset || window.scrollY;

  //   Top of the page
  if (currentPosition == 0) {
    document.body.classList.remove("sticky");
  }

  //Scrolled down
  else if (currentPosition > lastScrollTop) {
    document.body.classList.remove("sticky");
  }

  //scrolled up
  else if (currentPosition < lastScrollTop) {
    document.body.classList.add("sticky");
  }

  //update last scrolled position
  lastScrollTop = currentPosition;
});

//////////////////////////////////////////
// MAKING MOBILE NAVIAGTION WORK
const btnEl = document.querySelector(".btn-mobile-nav");
btnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
