/* ==========================================
   SMART DIGITAL LIBRARY
   DIGITAL LIBRARY JAVASCRIPT
========================================== */

// ==========================================
// SEARCH DIGITAL RESOURCES
// ==========================================

const searchInput = document.getElementById("searchResource");
const cards = document.querySelectorAll(".resource-card");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        cards.forEach(card => {

            const title = card.querySelector("h3").innerText.toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// ==========================================
// DOWNLOAD / READ BUTTON
// ==========================================

document.querySelectorAll(".download-btn").forEach(button => {

    button.addEventListener("click", function () {

        const title = this.parentElement.querySelector("h3").innerText;

        showToast(title + " opened successfully.");

        console.log(title + " opened.");

    });

});

// ==========================================
// ANIMATED COUNTER
// ==========================================

const counters = document.querySelectorAll(".stat-box h2");

let started = false;

function startCounter() {

    if (started) return;

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        started = true;

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            let count = 0;

            const speed = target / 120;

            function update() {

                count += speed;

                if (count >= target) {

                    counter.innerText = target + "+";

                } else {

                    counter.innerText = Math.floor(count) + "+";

                    requestAnimationFrame(update);

                }

            }

            update();

        });

    }

}

window.addEventListener("scroll", startCounter);

// ==========================================
// SCROLL REVEAL
// ==========================================

const revealItems = document.querySelectorAll(".resource-card,.stat-box");

function revealAnimation() {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            item.classList.add("active");
            item.classList.add("reveal");

        }

    });

}

window.addEventListener("scroll", revealAnimation);
window.addEventListener("load", revealAnimation);

// ==========================================
// PAGE READY
// ==========================================

console.log("✅ Digital Library Loaded");
/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn = document.createElement("button");
topBtn.id = "topBtn";
topBtn.innerHTML = "↑";

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

/* ==========================================
   DARK MODE
========================================== */

const darkBtn = document.createElement("button");

darkBtn.id = "darkMode";
darkBtn.innerHTML = "🌙";

Object.assign(darkBtn.style, {

    position: "fixed",
    left: "20px",
    bottom: "30px",
    width: "50px",
    height: "50px",
    border: "none",
    borderRadius: "50%",
    background: "#111827",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
    zIndex: "999"

});

document.body.appendChild(darkBtn);

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

}

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );

});

/* ==========================================
   TOAST NOTIFICATION
========================================== */

function showToast(message) {

    const toast = document.createElement("div");

    toast.innerText = message;

    Object.assign(toast.style, {

        position: "fixed",
        bottom: "90px",
        right: "20px",
        background: "#2563eb",
        color: "#fff",
        padding: "15px 25px",
        borderRadius: "10px",
        boxShadow: "0 5px 15px rgba(0,0,0,.2)",
        zIndex: "9999",
        fontSize: "15px"

    });

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.style.opacity = "0";
        toast.style.transition = ".5s";

    }, 2000);

    setTimeout(() => {

        toast.remove();

    }, 2500);

}

/* ==========================================
   LOADING EFFECT
========================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.remove();

        }, 500);

    }

});

/* ==========================================
   SAVE LAST OPENED RESOURCE
========================================== */

document.querySelectorAll(".download-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const title = btn.parentElement.querySelector("h3").innerText;

        localStorage.setItem("lastResource", title);

        showToast(title + " opened successfully!");

    });

});

/* ==========================================
   PAGE READY
========================================== */

console.log("📚 Digital Library Fully Loaded");