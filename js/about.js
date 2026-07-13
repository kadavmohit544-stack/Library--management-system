/* ==========================================
   SMART DIGITAL LIBRARY
   ABOUT PAGE JAVASCRIPT
========================================== */

// ==========================
// Sticky Navbar
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    } else {

        header.style.background = "#ffffff";
        header.style.boxShadow = "none";

    }

});

// ==========================
// Scroll Reveal Animation
// ==========================

const revealElements = document.querySelectorAll(
    ".about-library,.mission,.statistics,.why-us,.team,.cta"
);

function revealSection() {

    revealElements.forEach((section) => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            section.classList.add("active");
            section.classList.add("reveal");

        }

    });

}

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// ==========================
// Counter Animation
// ==========================

const counters = document.querySelectorAll(".stat-box h2");

let started = false;

function runCounter() {

    if (started) return;

    const section = document.querySelector(".statistics");

    if (!section) return;

    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        started = true;

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            let count = 0;

            const speed = target / 120;

            const update = () => {

                count += speed;

                if (count >= target) {

                    counter.innerText = target + "+";

                } else {

                    counter.innerText = Math.floor(count) + "+";

                    requestAnimationFrame(update);

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", runCounter);

// ==========================
// CTA Button Animation
// ==========================

const ctaButton = document.querySelector(".cta button");

if (ctaButton) {

    ctaButton.addEventListener("mouseenter", () => {

        ctaButton.style.transform = "scale(1.08)";

    });

    ctaButton.addEventListener("mouseleave", () => {

        ctaButton.style.transform = "scale(1)";

    });

}

// ==========================
// Active Navigation
// ==========================

const links = document.querySelectorAll(".nav-menu a");

links.forEach(link => {

    if (link.href === window.location.href) {

        link.classList.add("active");

    }

});

// ==========================
// Back To Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#2563eb";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ==========================
// Loading Animation
// ==========================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .8s";

        document.body.style.opacity = "1";

    }, 100);

});

// ==========================
// Console Message
// ==========================

console.log("✅ Smart Digital Library - About Page Loaded Successfully");