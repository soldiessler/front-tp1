const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.setProperty("--delay", `${index * 90}ms`);
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach(item => observer.observe(item));
