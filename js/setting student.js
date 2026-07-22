// ===========================================
// Settings Page JavaScript
// ===========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Settings Page Loaded Successfully!");

    // Form
    const form = document.getElementById("settingsForm");

    // Inputs
    const fullName = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');

    const passwordFields = document.querySelectorAll('input[type="password"]');

    const currentPassword = passwordFields[0];
    const newPassword = passwordFields[1];
    const confirmPassword = passwordFields[2];

    // Checkboxes
    const darkMode = document.getElementById("darkmode");
    const notification = document.getElementById("notification");
    const emailAlerts = document.getElementById("emailalerts");

    // ===========================
    // Save Settings
    // ===========================

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        // Password Validation
        if (newPassword.value !== confirmPassword.value) {

            alert("New Password and Confirm Password do not match!");

            return;

        }

        alert("Settings Saved Successfully!");

        console.log("Student Name :", fullName.value);
        console.log("Email :", email.value);
        console.log("Notifications :", notification.checked);
        console.log("Email Alerts :", emailAlerts.checked);
        console.log("Dark Mode :", darkMode.checked);

    });

    // ===========================
    // Dark Mode
    // ===========================

    darkMode.addEventListener("change", function () {

        if (this.checked) {

            document.body.style.background = "#121212";
            document.body.style.color = "#ffffff";

        } else {

            document.body.style.background = "#f4f7fc";
            document.body.style.color = "#333";

        }

    });

    // ===========================
    // Notification
    // ===========================

    notification.addEventListener("change", function () {

        if (this.checked) {

            alert("Notifications Enabled");

        } else {

            alert("Notifications Disabled");

        }

    });

    // ===========================
    // Email Alerts
    // ===========================

    emailAlerts.addEventListener("change", function () {

        if (this.checked) {

            console.log("Email Alerts Enabled");

        } else {

            console.log("Email Alerts Disabled");

        }

    });

    // ===========================
    // Reset Button
    // ===========================

    form.addEventListener("reset", function () {

        setTimeout(function () {

            alert("Settings Reset Successfully!");

        }, 100);

    });

});