// =======================================
// Smart Library Settings
// settings.js
// =======================================

// Elements
const libraryName = document.getElementById("libraryName");
const collegeName = document.getElementById("collegeName");
const libraryEmail = document.getElementById("libraryEmail");
const libraryPhone = document.getElementById("libraryPhone");

const emailNotification = document.getElementById("emailNotification");
const systemNotification = document.getElementById("systemNotification");

const maxBooks = document.getElementById("maxBooks");
const finePerDay = document.getElementById("finePerDay");
const returnDays = document.getElementById("returnDays");

const saveBtn = document.getElementById("saveSettings");
const resetBtn = document.getElementById("resetSettings");

const lightBtn = document.getElementById("lightMode");
const darkBtn = document.getElementById("darkMode");

const backupBtn = document.getElementById("backupBtn");
const restoreBtn = document.getElementById("restoreBtn");

// =======================================
// Load Settings
// =======================================

function loadSettings(){

    const settings = JSON.parse(localStorage.getItem("librarySettings"));

    if(!settings) return;

    libraryName.value = settings.libraryName || "";
    collegeName.value = settings.collegeName || "";
    libraryEmail.value = settings.libraryEmail || "";
    libraryPhone.value = settings.libraryPhone || "";

    emailNotification.checked = settings.emailNotification || false;
    systemNotification.checked = settings.systemNotification || false;

    maxBooks.value = settings.maxBooks || 5;
    finePerDay.value = settings.finePerDay || 10;
    returnDays.value = settings.returnDays || 15;

}

loadSettings();

// =======================================
// Save Settings
// =======================================

saveBtn.onclick = function(){

    const settings = {

        libraryName: libraryName.value,
        collegeName: collegeName.value,
        libraryEmail: libraryEmail.value,
        libraryPhone: libraryPhone.value,

        emailNotification: emailNotification.checked,
        systemNotification: systemNotification.checked,

        maxBooks: maxBooks.value,
        finePerDay: finePerDay.value,
        returnDays: returnDays.value

    };

    localStorage.setItem(
        "librarySettings",
        JSON.stringify(settings)
    );

    alert("Settings Saved Successfully.");

};

// =======================================
// Reset
// =======================================

resetBtn.onclick = function(){

    if(confirm("Reset all settings?")){

        localStorage.removeItem("librarySettings");

        location.reload();

    }

};

// =======================================
// Theme
// =======================================

lightBtn.onclick = function(){

    document.body.classList.remove("dark");

    localStorage.setItem("theme","light");

};

darkBtn.onclick = function(){

    document.body.classList.add("dark");

    localStorage.setItem("theme","dark");

};

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark");

}

// =======================================
// Backup
// =======================================

backupBtn.onclick = function(){

    const data = {

        books: JSON.parse(localStorage.getItem("books")) || [],
        students: JSON.parse(localStorage.getItem("students")) || [],
        issues: JSON.parse(localStorage.getItem("issues")) || [],
        returns: JSON.parse(localStorage.getItem("returns")) || [],
        settings: JSON.parse(localStorage.getItem("librarySettings")) || {}

    };

    const blob = new Blob(
        [JSON.stringify(data,null,2)],
        {type:"application/json"}
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "Library_Backup.json";

    a.click();

};

// =======================================
// Restore
// =======================================

restoreBtn.onclick = function(){

    alert("Restore feature will be connected with file upload in the final version.");

};

// =======================================
// Password Validation
// =======================================

const currentPassword = document.getElementById("currentPassword");
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");

if(currentPassword){

    confirmPassword.addEventListener("keyup",()=>{

        if(newPassword.value !== confirmPassword.value){

            confirmPassword.style.borderColor = "red";

        }
        else{

            confirmPassword.style.borderColor = "green";

        }

    });

}

// =======================================
// Console
// =======================================

console.log("Settings Module Loaded Successfully");