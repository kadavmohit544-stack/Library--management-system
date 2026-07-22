/* ==========================================
   SMART DIGITAL LIBRARY
   CIVIL ENGINEERING PAGE JAVASCRIPT
========================================== */

// ==============================
// SEARCH BOOKS
// ==============================

const searchInput = document.getElementById("searchInput");
const bookCards = document.querySelectorAll(".book-card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    bookCards.forEach(card => {

        const title = card.querySelector("h3").innerText.toLowerCase();
        const author = card.querySelector("p").innerText.toLowerCase();
        const category = card.querySelector(".category").innerText.toLowerCase();

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


// ==============================
// READ MORE
// ==============================

document.querySelectorAll(".read-btn").forEach(button => {

    button.addEventListener("click", () => {

        const title = button.closest(".book-card")
            .querySelector("h3").innerText;

        alert(
            "📖 " + title +
            "\n\nThis Civil Engineering book is available in Smart Digital Library."
        );

    });

});


// ==============================
// DOWNLOAD
// ==============================

document.querySelectorAll(".download-btn").forEach(button => {

    button.addEventListener("click", () => {

        const title = button.closest(".book-card")
            .querySelector("h3").innerText;

        alert(
            "⬇ Download Started...\n\n" + title
        );

    });

});


// ==============================
// CARD ANIMATION
// ==============================

bookCards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {

        card.style.transition = "0.6s";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, index * 150);

});


// ==============================
// HEADER SHADOW
// ==============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ==============================
// DARK MODE
// ==============================

const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙";
darkBtn.id = "darkMode";

Object.assign(darkBtn.style, {

    position: "fixed",
    right: "20px",
    bottom: "20px",
    width: "55px",
    height: "55px",
    border: "none",
    borderRadius: "50%",
    background: "#2563eb",
    color: "#fff",
    fontSize: "22px",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(0,0,0,.2)",
    zIndex: "999"

});

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        document.body.style.background = "#0f172a";
        document.body.style.color = "#ffffff";

        document.querySelectorAll(".book-card").forEach(card => {

            card.style.background = "#1e293b";
            card.style.color = "#ffffff";

        });

    } else {

        document.body.style.background = "#f4f7fc";
        document.body.style.color = "#333333";

        document.querySelectorAll(".book-card").forEach(card => {

            card.style.background = "#ffffff";
            card.style.color = "#333333";

        });

    }

});


// ==============================
// SCROLL TO TOP
// ==============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

Object.assign(topBtn.style, {

    position: "fixed",
    left: "20px",
    bottom: "20px",
    width: "55px",
    height: "55px",
    border: "none",
    borderRadius: "50%",
    background: "#16a34a",
    color: "#fff",
    fontSize: "22px",
    cursor: "pointer",
    display: "none",
    zIndex: "999"

});

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ==============================
// PAGE LOADED
// ==============================

console.log("🏗️ Civil Engineering Books Page Loaded Successfully");