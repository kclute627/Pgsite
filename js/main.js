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

// for counter up animation
// Function to start the count-up animation
function startCountUpAnimation() {
  const amounts = document.querySelectorAll(".amount");

  amounts.forEach((element) => {
    const amountText = element.textContent; // Get the text content, e.g., '$4.2 Million'
    const amountValue = parseFloat(amountText.replace(/[^0-9.]/g, "")); // Extract numerical value
    const parentDiv = element.closest(".record_box"); // Get the parent div

    const totalAmountElement = parentDiv.querySelector(".total_amount");
    totalAmountElement.textContent = `Total: $0 Million`; // Initial value to start the animation

    // Animate the count-up effect
    let counter = 0;
    const interval = setInterval(() => {
      counter += amountValue / 100; // Increase by a fraction to create the animation effect

      // Ensure the counter doesn't surpass the actual value
      if (counter >= amountValue) {
        clearInterval(interval);
        counter = amountValue;
      }

      totalAmountElement.textContent = `Total: $${counter.toFixed(1)} Million`;
    }, 15); // Speed of animation (lower for smoother but heavier performance)
  });
}

// Intersection Observer to trigger the animation when the section is in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCountUpAnimation();
      observer.unobserve(entry.target);
    }
  });
});

const recordsContent = document.querySelector(".records_content");
observer.observe(recordsContent);

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
