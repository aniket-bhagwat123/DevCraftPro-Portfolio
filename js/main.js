// Mobile navigation toggle
const nav = document.getElementById("nav");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

function openNav() {
  nav.classList.add("nav--open");
  navToggle.setAttribute("aria-expanded", "true");
  navToggle.setAttribute("aria-label", "Close menu");
  document.body.classList.add("nav-open");
}

function closeNav() {
  nav.classList.remove("nav--open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open menu");
  document.body.classList.remove("nav-open");
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    nav.classList.contains("nav--open") ? closeNav() : openNav();
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("nav--open")) {
      closeNav();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      closeNav();
    }
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Parallax effect for mesh background
const meshBg = document.querySelector(".mesh-bg");
if (meshBg) {
  window.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    meshBg.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
}

// Scroll reveal animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
