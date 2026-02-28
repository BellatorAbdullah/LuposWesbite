document.addEventListener("DOMContentLoaded", () => {

  /* ================= FADE-IN OBSERVER ================= */
  const elements = document.querySelectorAll(".fade-in");

  if (elements.length) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
      }
    );

    elements.forEach(el => observer.observe(el));
  }

  /* ================= HAMBURGER MENU ================= */
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });

    // Close menu when a mobile link is clicked
    const mobileLinks = document.querySelectorAll(".mobile-link");
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
      });
    });
  }

});
const greetingPopup = document.getElementById("greetingPopup");
const greetingText = document.getElementById("greetingText");

const hour = new Date().getHours();

let greeting;

if (hour >= 5 && hour < 12) {
  greeting = "Good Morning ☀️";
} 
else if (hour >= 12 && hour < 17) {
  greeting = "Good Afternoon 🌤";
} 
else if (hour >= 17 && hour < 21) {
  greeting = "Good Evening 🌇";
} 
else {
  greeting = "Good Night 🌙";
}

greetingText.textContent = greeting;

// Show popup after short delay
setTimeout(() => {
  greetingPopup.classList.add("show");
}, 800);

// Optional: hide after 5 seconds
setTimeout(() => {
  greetingPopup.classList.remove("show");
}, 6000);
