/** @format */

// Making The Date Updated.
const currentYear = new Date().getFullYear();
const yearEl = document.querySelector(".year");
yearEl.textContent = currentYear;

// Making the mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Finds the HTML Element that has the attribute value of the href and scrolls into the section.
    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      console.log(sectionEL);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation.
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// Sticky Navigation
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    // headerEl.classList.add("sticky");
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.querySelector("body").classList.add("sticky");
      // headerEl.classList.add("sticky");
    } else if (ent.isIntersecting) {
      // headerEl.classList.remove("sticky");
      document.querySelector("body").classList.remove("sticky");
    }
  },
  {
    // Null means the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);

function createIntersectionObserver(sectionClass, targetClass, threshold) {
  const sectionEl = document.querySelector(sectionClass);
  const observer = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      if (ent.isIntersecting) {
        document
          .querySelector(targetClass)
          .classList.add("border-bottom-style");
      } else {
        document
          .querySelector(targetClass)
          .classList.remove("border-bottom-style");
      }
    },
    {
      root: null,
      threshold: threshold,
    }
  );
  observer.observe(sectionEl);
}

const sections = [
  { sectionClass: ".section-how", targetClass: ".one", threshold: 0.2 },
  { sectionClass: ".section-meals", targetClass: ".two", threshold: 0.5 },
  {
    sectionClass: ".section-testimonials",
    targetClass: ".three",
    threshold: 0.2,
  },
  { sectionClass: ".section-pricing", targetClass: ".four", threshold: 0.5 },
];

sections.forEach(({ sectionClass, targetClass, threshold }) => {
  createIntersectionObserver(sectionClass, targetClass, threshold);
});

function checkFlexGap() {
  var flex = document.createElement("div");
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
}
checkFlexGap();

const pricingSection = document.querySelector(".section-pricing");

const newObserver = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (entry.isIntersecting) {
      document.querySelector(".four").classList.add("border-bottom-style");
    } else if (entry.isIntersecting === false) {
      document.querySelector(".four").classList.remove("border-bottom-style");
    }
  },
  {
    root: null,
    threshold: 0.5,
  }
);

newObserver.observe(pricingSection);
