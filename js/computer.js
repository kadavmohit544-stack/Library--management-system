/* ==========================================
   SMART DIGITAL LIBRARY
   COMPUTER BOOKS JAVASCRIPT
========================================== */

// ============================
// SEARCH BOOKS
// ============================

const searchInput = document.getElementById("searchInput");
const bookCards = document.querySelectorAll(".book-card");

searchInput.addEventListener("keyup", function () {

    const value = searchInput.value.toLowerCase();

    bookCards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();
        const author = card.querySelector("p").textContent.toLowerCase();
        const category = card.querySelector(".category").textContent.toLowerCase();

        if (
            title.includes(value) ||
            author.includes(value) ||
            category.includes(value)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


// ============================
// READ MORE BUTTON
// ============================

const readButtons = document.querySelectorAll(".read-btn");

readButtons.forEach(button => {

    button.addEventListener("click", function () {

        const title =
            this.parentElement.parentElement.querySelector("h3").innerText;

        alert(
            "📖 " +
            title +
            "\n\nThis book is available in the Smart Digital Library."
        );

    });

});


// ============================
// DOWNLOAD BUTTON
// ============================

const downloadButtons =
    document.querySelectorAll(".download-btn");

downloadButtons.forEach(button => {

    button.addEventListener("click", function () {

        const title =
            this.parentElement.parentElement.querySelector("h3").innerText;

        alert(
            "⬇ Download Started...\n\n" + title
        );

    });

});


// ============================
// BOOK CARD ANIMATION
// ============================

bookCards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {

        card.style.transition = ".6s";

        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, index * 150);

});


// ============================
// HEADER SHADOW ON SCROLL
// ============================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 8px 20px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ============================
// DARK MODE
// ============================

const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙";

Object.assign(darkBtn.style, {

    position: "fixed",
    right: "20px",
    bottom: "20px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    fontSize: "22px",
    background: "#2563eb",
    color: "#fff",
    boxShadow: "0 8px 20px rgba(0,0,0,.2)",
    zIndex: "999"

});

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        document.body.style.background = "#0f172a";
        document.body.style.color = "#ffffff";

        document.querySelectorAll(".book-card").forEach(card => {

            card.style.background = "#1e293b";
            card.style.color = "#ffffff";

        });

    } else {

        document.body.style.background = "#f4f7fc";
        document.body.style.color = "#333";

        document.querySelectorAll(".book-card").forEach(card => {

            card.style.background = "#ffffff";
            card.style.color = "#333";

        });

    }

});


// ============================
// PAGE LOADED
// ============================

console.log("✅ Computer Books Page Loaded Successfully");