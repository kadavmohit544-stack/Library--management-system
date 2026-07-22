// ===========================================
// Student Dashboard JavaScript
// ===========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Student Dashboard Loaded Successfully!");

    // ==========================
    // Live Date & Time
    // ==========================
    function updateDateTime() {

        const dateTime = document.getElementById("dateTime");

        if (dateTime) {

            const now = new Date();

            dateTime.innerHTML = now.toLocaleString("en-IN", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });

        }

    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    // ==========================
    // Counter Animation
    // ==========================

    const cards = document.querySelectorAll(".card p");

    const values = [5, 12, 2, 0];

    cards.forEach(function (card, index) {

        let count = 0;

        const target = values[index];

        const interval = setInterval(function () {

            if (count >= target) {

                clearInterval(interval);

            } else {

                count++;

                if (index === 3) {

                    card.innerHTML = "₹" + count;

                } else {

                    card.innerHTML = count;

                }

            }

        }, 80);

    });

    // ==========================
    // Progress Bar Animation
    // ==========================

    const progress = document.querySelector(".progress");

    if (progress) {

        progress.style.width = "0%";

        setTimeout(function () {

            progress.style.transition = "2s";
            progress.style.width = "70%";
            progress.innerHTML = "70%";

        }, 500);

    }

    // ==========================
    // Card Click Effect
    // ==========================

    const dashboardCards = document.querySelectorAll(".card");

    dashboardCards.forEach(function (card) {

        card.addEventListener("click", function () {

            card.style.transform = "scale(1.05)";

            setTimeout(function () {

                card.style.transform = "scale(1)";

            }, 200);

        });

    });

    // ==========================
    // Greeting
    // ==========================

    const hour = new Date().getHours();

    let message = "";

    if (hour < 12) {

        message = "🌞 Good Morning Student!";

    } else if (hour < 18) {

        message = "☀️ Good Afternoon Student!";

    } else {

        message = "🌙 Good Evening Student!";

    }

    console.log(message);

});

// ===========================================
// Logout Function
// ===========================================

function logout() {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        alert("Logout Successful!");

        window.location.href = "index.html";

    }

}

// ===========================================
// Notification Function
// ===========================================

function showNotification(message) {

    alert(message);

}

// ===========================================
// Welcome Notification
// ===========================================

setTimeout(function () {

    showNotification("📚 Welcome to Smart Digital Library!");

}, 1000);
