
function validateInput(event) {
    // Prevent form submission for validation
    // Clear any previous error messages
    const errorElement = document.getElementById("error");
    errorElement.textContent = "";

    // Get the input value
    const username = document.getElementById("fname");
    const username_val = username.value.trim();

    const email = document.getElementById("email");
    const email_val = email.value.trim();

    const phone = document.getElementById("phone");
    const phone_val = phone.value.trim();

    const message = document.getElementById("message");
    const message_val = message.value.trim();

    // Validate input
    if (username_val === "") {
        errorElement.textContent = "The username cannot be empty. Please enter a valid username.";
        event.preventDefault();
        return;
    }

    if (username_val.length < 3) {
        errorElement.textContent = "The username must be at least 3 characters long.";
        event.preventDefault();
        return;
    }

    if (email_val === "") {
        errorElement.textContent = "Please enter an email";
        event.preventDefault();
        return;
    }

    if ((email_val.indexOf("@") === -1) || (email_val.indexOf(".com") === -1)) {
        errorElement.textContent = "Please enter email in correct format"
        event.preventDefault();
        return; 
    }

    if (phone_val === ""){
        errorElement.textContent = "Please enter a phone number";
        event.preventDefault();
        return;
    }

    if (message_val === ""){
        errorElement.textContent = "Please enter a message";
        event.preventDefault();
        return;
    }

    // If input is valid, submit the form or show success message
    const successElement = document.getElementById("success-message");
    successElement.textContent = "Form submitted successfully!";
    successElement.style.color = "green";
}

const form = document.getElementById("customForm");
form.addEventListener("submit", validateInput);