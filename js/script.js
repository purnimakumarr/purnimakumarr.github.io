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
// MAKE DESCRIPTION BUTTONS WORK
const descShort = document.querySelector(".desc--short");
const btnShort = document.querySelector(".btn--short");

const descMed = document.querySelector(".desc--med");
const btnMed = document.querySelector(".btn--med");

const descLong = document.querySelector(".desc--long");
const btnLong = document.querySelector(".btn--long");

btnShort.addEventListener("click", function () {
  btnShort.classList.add("btn-selected");
  btnMed.classList.remove("btn-selected");
  btnLong.classList.remove("btn-selected");

  descMed.classList.remove("desc-show");
  descLong.classList.remove("desc-show");
});

btnMed.addEventListener("click", function () {
  btnMed.classList.add("btn-selected");
  btnShort.classList.remove("btn-selected");
  btnLong.classList.remove("btn-selected");

  descMed.classList.add("desc-show");
  descLong.classList.remove("desc-show");
});

btnLong.addEventListener("click", function () {
  btnLong.classList.add("btn-selected");
  btnShort.classList.remove("btn-selected");
  btnMed.classList.remove("btn-selected");

  descMed.classList.add("desc-show");
  descLong.classList.add("desc-show");
});

//////////////////////////////////////////
// MAKING MOBILE NAVIAGTION WORK
const btnEl = document.querySelector(".btn-mobile-nav");
btnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//////////////////////////////////////////
// FIXING FLEXBOX GPA PROPERTY MISSING IN SAFARI VERSIONS
const noFlexGap = function () {
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);

  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
};

noFlexGap();
