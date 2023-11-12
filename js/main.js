// Selecting elements
let navbar = document.querySelector("#mobileBar");
let mobilenav = document.querySelector(".mobile_menu");
let closeNav = document.querySelector("#closeMobileMenu");

// Function to add "active" class to mobilenav
function openMobileNav() {
  mobilenav.classList.add("active");
}

// Function to remove "active" class from mobilenav
function closeMobileNav() {
  mobilenav.classList.remove("active");
}

// Event listeners
navbar.addEventListener("click", openMobileNav);
closeNav.addEventListener("click", closeMobileNav);

// Get the button element
const btn = document.getElementById("button");

// Function to handle the scroll event
window.onscroll = () => {
  if (
    document.documentElement.scrollTop > 300 ||
    document.body.scrollTop > 300
  ) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};

// Function to handle the button click event
btn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
