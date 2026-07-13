/* ==========================================
   SMART DIGITAL LIBRARY
   LOGIN PAGE JAVASCRIPT
========================================== */

// ==========================================
// SHOW / HIDE PASSWORD
// ==========================================

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        password.type = "password";
        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye"></i>';

    }

});

// ==========================================
// TOAST NOTIFICATION
// ==========================================

function showToast(message, color = "#2563eb") {

    const toast = document.createElement("div");

    toast.className = "toast";
    toast.innerHTML = message;
    toast.style.background = color;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.remove();

    }, 3000);

}

// ==========================================
// LOGIN SYSTEM
// ==========================================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email =
        document.getElementById("email").value.trim();

    const pass =
        document.getElementById("password").value.trim();

    const remember =
        document.getElementById("remember").checked;

    // Admin Login

    if (
        email === "admin@library.com" &&
        pass === "admin123"
    ) {

        if (remember) {

            localStorage.setItem("rememberEmail", email);

        }

        showToast("✅ Admin Login Successful", "#10b981");

        setTimeout(() => {

            window.location.href =
                "dashboard.html";

        }, 1500);

        return;
    }

    // Student Login

    if (
        email === "student@library.com" &&
        pass === "student123"
    ) {

        if (remember) {

            localStorage.setItem("rememberEmail", email);

        }

        showToast("✅ Student Login Successful", "#10b981");

        setTimeout(() => {

            window.location.href =
                "student-dashboard.html";

        }, 1500);

        return;
    }

    showToast("❌ Invalid Email or Password", "#ef4444");

});
/* ==========================================
   REMEMBER ME (AUTO FILL)
========================================== */

window.addEventListener("load", () => {

    const savedEmail = localStorage.getItem("rememberEmail");

    if (savedEmail) {

        document.getElementById("email").value = savedEmail;
        document.getElementById("remember").checked = true;

    }

});

/* ==========================================
   EMAIL VALIDATION
========================================== */

const emailInput = document.getElementById("email");

emailInput.addEventListener("blur", () => {

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(emailInput.value.trim())) {

        emailInput.style.borderColor = "#ef4444";

    } else {

        emailInput.style.borderColor = "#10b981";

    }

});

/* ==========================================
   PASSWORD VALIDATION
========================================== */

password.addEventListener("input", () => {

    if (password.value.length < 6) {

        password.style.borderColor = "#ef4444";

    } else {

        password.style.borderColor = "#10b981";

    }

});

/* ==========================================
   LOADER
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
   DARK MODE BUTTON
========================================== */

const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙";
darkBtn.id = "darkMode";

Object.assign(darkBtn.style, {

    position: "fixed",
    left: "20px",
    bottom: "20px",
    width: "50px",
    height: "50px",
    border: "none",
    borderRadius: "50%",
    background: "#111827",
    color: "#ffffff",
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
   ENTER KEY SUPPORT
========================================== */

document.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        loginForm.requestSubmit();

    }

});

/* ==========================================
   PAGE READY
========================================== */

console.log("🔐 Login Page Fully Loaded");