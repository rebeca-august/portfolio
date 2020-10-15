const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.5 });

// Intersection observer for nav-bar

const pages = document.querySelectorAll(".page");
const navItems = document.querySelectorAll(".nav-bar ul a");

const removeAllActiveClasses = () => {
  for (const item of navItems) {
    item.classList.remove("active");
  }
};

const options = {
  root: null,
  rootMargin: "0px  0px -200px",
  threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
};

const callback = (entries) => {
  const intersectingEntry = entries.find(
    (entry) => entry.intersectionRatio > 0.3
  );
  if (intersectingEntry) {
    const targetId = intersectingEntry.target.id;
    const navItem = document.querySelector(`ul a[href="#${targetId}"]`);

    removeAllActiveClasses();

    navItem.classList.add("active");
  }
};

const observer = new IntersectionObserver(callback, options);

for (const page of pages) {
  observer.observe(page);
}

// Intersection Observer for elements

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

//Extra projects button

const extraProjects = document.querySelector(".extra-projects-content");
const seeMoreBtn = document.querySelector(".see-more");

seeMoreBtn.addEventListener("click", () => {
  extraProjects.style.display = "flex";
  seeMoreBtn.style.display = "none";
});
