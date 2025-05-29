window.addEventListener("scroll", function () {
  const scrolled =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  document.getElementById("progressBar").style.width = scrolled + "%";
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Learning card navigation function
function navigateToLearning(category) {
  // Add ripple effect
  const card = event.currentTarget;
  const ripple = document.createElement("div");
  ripple.style.position = "absolute";
  ripple.style.borderRadius = "50%";
  ripple.style.background = "rgba(255, 255, 255, 0.6)";
  ripple.style.transform = "scale(0)";
  ripple.style.animation = "ripple 0.6s linear";
  ripple.style.left = event.clientX - card.offsetLeft + "px";
  ripple.style.top = event.clientY - card.offsetTop + "px";
  ripple.style.width = ripple.style.height = "20px";

  card.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
    // Here you would navigate to the specific learning page
    alert(`Navigating to ${category.toUpperCase()} learning page...`);
    // window.location.href = `/${category}-learning.html`;
  }, 600);
}

// Add ripple animation CSS
const style = document.createElement("style");
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);

// Add card hover sound effect (optional)
document.querySelectorAll(".learning-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Parallax effect for floating shapes
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const shapes = document.querySelectorAll(".shape");

  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.5;
    shape.style.transform = `translateY(${scrolled * speed}px) rotate(${
      scrolled * 0.1
    }deg)`;
  });
});
