document.addEventListener("DOMContentLoaded", function () {
  // Animate hero elements only on page load
  document.querySelectorAll('.hero-animate').forEach(function(el) {
    setTimeout(function() {
      el.classList.add('loaded');
    }, 200); // slight delay for effect
  });

  // Existing Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((sec) => {
    observer.observe(sec);
  });
});