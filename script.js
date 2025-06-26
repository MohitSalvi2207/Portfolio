const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll(
    ".animate-left, .animate-right, .animate-up, .animate-zoom, .animate-fade"
  )
  .forEach((el) => {
    observer.observe(el);
  });

var typed = new Typed("#typed-text", {
  strings: ["Front-end Developer", "React JS Developer"],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1500,
  loop: true,
});

const text = `Hi, I’m Mohit, a passionate Front-End Developer dedicated to crafting dynamic, responsive, and user-friendly web experiences. With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I specialize in building visually appealing and highly functional interfaces that enhance user engagement. I have a keen eye for design and performance, ensuring that every website I create is not only aesthetically pleasing but also optimized for speed and usability. I thrive on learning new technologies, solving challenges, and continuously improving my skills to stay ahead in the fast-evolving world of web development. My goal is to deliver intuitive, accessible, and high-performance web solutions that elevate user experiences. Let’s build something amazing together! 🚀`;

let i = 0;
const speed = 50; // typing speed in ms

function typeWriter() {
  if (i < text.length) {
    document.getElementById("about-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Start animation when in view (optional: start immediately)
window.addEventListener("DOMContentLoaded", typeWriter);

// Scrolling effect for navigation links
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNavbar");
  if (window.scrollY > 200) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ARROR Back to Top Button

const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Light and Dark Mode Toggle

// const toggleBtn = document.getElementById("themeToggle");
// const icon = toggleBtn.querySelector("i");

// toggleBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");

//   // Change icon
//   if (document.body.classList.contains("dark-mode")) {
//     icon.classList.remove("fa-moon");
//     icon.classList.add("fa-sun");
//   } else {
//     icon.classList.remove("fa-sun");
//     icon.classList.add("fa-moon");
//   }
// });

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNavbar");
  if (window.scrollY > 10) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
