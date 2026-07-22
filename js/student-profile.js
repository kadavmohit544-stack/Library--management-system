// ===============================
// Student Profile JavaScript
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Student Profile Loaded Successfully!");

    // Welcome Message
    alert("Welcome to Your Profile 👨‍🎓");

    // Edit Profile Button
    const editBtn = document.querySelector(".profile-card button");

    editBtn.addEventListener("click", function () {

        alert("Edit Profile feature will be available soon.");

    });

});

// ===============================
// Student Information
// ===============================

const student = {

    id: "GPG2026001",
    name: "Chunendra Damahe",
    department: "Computer Engineering",
    year: "Second Year",
    email: "student@gpgondia.ac.in",
    mobile: "+91 9876543210",
    booksIssued: 5,
    fine: 0,
    status: "Active"

};

console.log(student);

// ===============================
// Greeting
// ===============================

const hour = new Date().getHours();

let greeting = "";

if (hour < 12) {

    greeting = "Good Morning ☀️";

} else if (hour < 18) {

    greeting = "Good Afternoon 🌤️";

} else {

    greeting = "Good Evening 🌙";

}

console.log(greeting);

// ===============================
// Button Hover Effect
// ===============================

const button = document.querySelector(".profile-card button");

button.addEventListener("mouseenter", function () {

    this.style.transform = "scale(1.05)";

});

button.addEventListener("mouseleave", function () {

    this.style.transform = "scale(1)";

});