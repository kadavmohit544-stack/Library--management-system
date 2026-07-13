// ===========================================
// Smart Library Management System
// common.js
// ===========================================

// ===============================
// Sidebar Toggle
// ===============================

const sidebar = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".menu-btn");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        sidebar.classList.toggle("active");

    });

}

// ===============================
// Active Menu
// ===============================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".sidebar a").forEach(link=>{

    const href = link.getAttribute("href");

    if(href === currentPage){

        link.classList.add("active");

    }

});

// ===============================
// Profile Dropdown
// ===============================

const profile = document.querySelector(".profile");
const dropdown = document.querySelector(".profile-dropdown");

if(profile && dropdown){

    profile.onclick = ()=>{

        dropdown.classList.toggle("active");

    };

    window.onclick = function(e){

        if(!e.target.closest(".profile")){

            dropdown.classList.remove("active");

        }

    };

}

// ===============================
// Scroll To Top
// ===============================

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        scrollBtn?.classList.add("show");

    }else{

        scrollBtn?.classList.remove("show");

    }

});

scrollBtn?.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// Dark Mode
// ===============================

const themeBtn = document.querySelector("#themeToggle");

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

}

themeBtn?.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    localStorage.setItem(

        "theme",

        document.body.classList.contains("dark")

        ? "dark"

        : "light"

    );

});

// ===============================
// Live Clock
// ===============================

const liveClock = document.getElementById("liveClock");

function updateClock(){

    if(!liveClock) return;

    const now = new Date();

    liveClock.innerHTML = now.toLocaleString();

}

setInterval(updateClock,1000);

updateClock();

// ===============================
// Toast Notification
// ===============================

function showToast(message,type="success"){

    const toast=document.createElement("div");

    toast.className="toast " + type;

    toast.innerHTML=message;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },300);

    },3000);

}

// Example
// showToast("Book Added Successfully");

// ===============================
// Loader
// ===============================

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader");

    if(loader){

        loader.style.display="none";

    }

});

// ===============================
// Console
// ===============================

console.log("Common JS Loaded Successfully");