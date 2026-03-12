document.addEventListener("DOMContentLoaded", () => {

  /* ====================================================
     FADE-IN SCROLL ANIMATION
  ==================================================== */

  const fadeElements = document.querySelectorAll(".fade-in");

  if (fadeElements.length) {

    const observer = new IntersectionObserver((entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // animate once
        }

      });

    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.15
    });

    fadeElements.forEach(el => observer.observe(el));
  }



  /* ====================================================
     HAMBURGER MENU
  ==================================================== */

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



  /* ====================================================
     GREETING POPUP
  ==================================================== */

  const greetingPopup = document.getElementById("greetingPopup");
  const greetingText = document.getElementById("greetingText");

  if (greetingPopup && greetingText) {

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

    setTimeout(() => {
      greetingPopup.classList.add("show");
    }, 800);

    setTimeout(() => {
      greetingPopup.classList.remove("show");
    }, 6000);

  }



  /* ====================================================
     SCROLL PROGRESS BAR
  ==================================================== */

  const progressBar = document.querySelector(".scroll-progress");

  if (progressBar) {

    window.addEventListener("scroll", () => {

      const scrollTop = document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (scrollTop / height) * 100;

      progressBar.style.width = scrolled + "%";

    });

  }



  /* ====================================================
     CURSOR GLOW FOLLOW
  ==================================================== */

  const glow = document.querySelector(".mouse-glow");

  if (glow) {

    document.addEventListener("mousemove", e => {

      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";

    });

  }

});

