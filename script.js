const hamburgerMenu = document.getElementById("hamburgerMenu");
const navLinks = document.getElementById("navLinks");
const navOverlay = document.getElementById("navOverlay");

function toggleMenu() {
  hamburgerMenu.classList.toggle("active");
  navLinks.classList.toggle("active");
  navOverlay.classList.toggle("active");

  // Prevent body scroll when menu is open
  document.body.style.overflow = navLinks.classList.contains("active")
    ? "hidden"
    : "auto";
}

function closeMenu() {
  hamburgerMenu.classList.remove("active");
  navLinks.classList.remove("active");
  navOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

hamburgerMenu.addEventListener("click", toggleMenu);
navOverlay.addEventListener("click", closeMenu);

// Close menu when clicking on a link
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    closeMenu();
  }
});

// Close menu on window resize if open
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && navLinks.classList.contains("active")) {
    closeMenu();
  }
});
