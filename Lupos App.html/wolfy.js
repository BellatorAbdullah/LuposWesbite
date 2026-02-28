document.addEventListener("DOMContentLoaded", () => {

  /* ================= FADE-IN OBSERVER ================= */
  const elements = document.querySelectorAll(".fade-in");

  if (elements.length) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.15 }
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

    const mobileLinks = document.querySelectorAll(".mobile-link");
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
      });
    });
  }

  /* ================= BUTTON ALERT ================= */
  const button = document.getElementById("button"); // grab the button AFTER DOM loaded
  if (button) {  // always good to check
    button.addEventListener("click", () => {
      alert("Nice Try Diddy. Lupos App not availible ");
    });
  }

});

