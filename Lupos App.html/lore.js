// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const progress = document.querySelector('.timeline-progress'); // vertical progress bar
  const dot = document.querySelector('.timeline-dot');           // moving dot

  // Update progress and dot position on scroll
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;                          // how far we scrolled
    const maxScroll = document.body.scrollHeight - window.innerHeight; // max scrollable distance
    if (maxScroll <= 0) return;                                // avoid division by 0

    const percent = scrollTop / maxScroll;                     // % scrolled
    const timelineHeight = window.innerHeight;                // timeline height
    const height = percent * timelineHeight;                  // height for progress bar

    progress.style.height = height + 'px';                    // fill progress
    dot.style.top = (height - 9) + 'px';                      // move dot along timeline
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section.fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

