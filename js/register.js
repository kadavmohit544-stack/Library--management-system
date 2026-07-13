/* ==========================================
   SMART DIGITAL LIBRARY
   REGISTER PAGE JAVASCRIPT
========================================== */

// ==========================================
// SELECT ELEMENTS
// ==========================================

const registerForm = document.getElementById("registerForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const togglePassword = document.getElementById("togglePassword");

// ==========================================
// SHOW / HIDE PASSWORD
// ==========================================

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
// TOAST MESSAGE
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
// REGISTER FORM
// ==========================================

registerForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const fullname =
        document.getElementById("fullname").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const enrollment =
        document.getElementById("enrollment").value.trim();

    const pass =
        password.value.trim();

    const confirm =
        confirmPassword.value.trim();

    // Password Match

    if (pass !== confirm) {

        showToast("❌ Passwords do not match!", "#ef4444");

        return;

    }

    // Save User

    let users = JSON.parse(localStorage.getItem("libraryUsers")) || [];

    users.push({

        fullname,
        email,
        mobile,
        enrollment,
        password: pass

    });

    localStorage.setItem(

        "libraryUsers",

        JSON.stringify(users)

    );

    showToast("✅ Registration Successful!", "#10b981");

    setTimeout(() => {

        window.location.href = "login.html";

    }, 2000);

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
   MOBILE VALIDATION
========================================== */

const mobileInput = document.getElementById("mobile");

mobileInput.addEventListener("input", () => {

    mobileInput.value = mobileInput.value.replace(/\D/g, "");

    if (mobileInput.value.length === 10) {

        mobileInput.style.borderColor = "#10b981";

    } else {

        mobileInput.style.borderColor = "#ef4444";

    }

});

/* ==========================================
   FULL NAME VALIDATION
========================================== */

const fullnameInput = document.getElementById("fullname");

fullnameInput.addEventListener("blur", () => {

    if (fullnameInput.value.trim().length >= 3) {

        fullnameInput.style.borderColor = "#10b981";

    } else {

        fullnameInput.style.borderColor = "#ef4444";

    }

});

/* ==========================================
   ENROLLMENT VALIDATION
========================================== */

const enrollmentInput = document.getElementById("enrollment");

enrollmentInput.addEventListener("blur", () => {

    if (enrollmentInput.value.trim().length >= 6) {

        enrollmentInput.style.borderColor = "#10b981";

    } else {

        enrollmentInput.style.borderColor = "#ef4444";

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
   DARK MODE
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
    borderRadius: "50%",
    border: "none",
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

        document.body.classList.contains("dark")
            ? "dark"
            : "light"

    );

});

/* ==========================================
   PAGE READY
========================================== */

console.log("📝 Registration Page Fully Loaded");