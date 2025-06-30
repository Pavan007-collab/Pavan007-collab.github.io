// Simple form validation and feedback for the contact form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector('textarea').value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Show a success message (you can customize this)
        alert("Thank you for contacting us, " + name + "! We'll get back to you soon.");

        // Optionally, reset the form
        form.reset();
    });
});