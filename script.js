// Select the form, email input, and error message elements
const form = document.querySelector(".form");
const emailInput = document.querySelector(".email");
const errorMessage = document.querySelector(".error-message");

// Initially hide the error message
errorMessage.style.display = "none";

// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  const emailValue = emailInput.value.trim();

  if (!isValidEmail(emailValue)) {
    // If the email is invalid, show the error message and add a red border
    errorMessage.style.display = "block";
    emailInput.style.border = "2px solid red";
  } else {
    // If the email is valid, hide the error message and reset the border
    errorMessage.style.display = "none";
    emailInput.style.border = "1px solid #ccc"; // Reset to the default border color

    // Optionally, you can submit the form here
    // form.submit();
  }
});
