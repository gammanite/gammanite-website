const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

if ("IntersectionObserver" in window) {
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  element.classList.add("pending");
  observer.observe(element);
});
}
