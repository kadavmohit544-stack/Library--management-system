
// =======================================
// Smart Library Dashboard
// dashboard.js
// =======================================

// LocalStorage Data
let books = JSON.parse(localStorage.getItem("books")) || [];
let students = JSON.parse(localStorage.getItem("students")) || [];
let issues = JSON.parse(localStorage.getItem("issues")) || [];
let returns = JSON.parse(localStorage.getItem("returns")) || [];

// Dashboard Elements
const totalBooks = document.getElementById("totalBooks");
const totalStudents = document.getElementById("totalStudents");
const totalIssued = document.getElementById("totalIssued");
const totalReturned = document.getElementById("totalReturned");

const latestIssueTable = document.getElementById("latestIssueTable");

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

const themeBtn = document.getElementById("themeBtn");

// =======================================
// Load Dashboard Cards
// =======================================

function loadDashboard() {

    totalBooks.textContent = books.length;

    totalStudents.textContent = students.length;

    totalIssued.textContent = issues.length;

    totalReturned.textContent = returns.length;

}

loadDashboard();


// =======================================
// Load Latest Issued Books
// =======================================

function loadLatestIssues() {

    if (!latestIssueTable) return;

    latestIssueTable.innerHTML = "";

    if (issues.length === 0) {

        latestIssueTable.innerHTML = `

        <tr>

            <td colspan="4">

                No Issued Books Found

            </td>

        </tr>

        `;

        return;

    }

    issues.slice().reverse().forEach(item => {

        latestIssueTable.innerHTML += `

        <tr>

            <td>${item.student}</td>

            <td>${item.book}</td>

            <td>${item.issueDate}</td>

            <td>

                <span class="badge-warning">

                    Issued

                </span>

            </td>

        </tr>

        `;

    });

}

loadLatestIssues();


// =======================================
// Mobile Sidebar
// =======================================

if(menuBtn){

menuBtn.onclick=function(){

sidebar.classList.toggle("active");

};

}


// =======================================
// Dark Mode
// =======================================

let darkMode = localStorage.getItem("darkMode");

if(darkMode==="enabled"){

document.body.classList.add("dark");

}

if(themeBtn){

themeBtn.onclick=function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("darkMode","enabled");

}else{

localStorage.setItem("darkMode","disabled");

}

};

}


// =======================================
// Auto Refresh Every Second
// =======================================

setInterval(()=>{

books = JSON.parse(localStorage.getItem("books")) || [];

students = JSON.parse(localStorage.getItem("students")) || [];

issues = JSON.parse(localStorage.getItem("issues")) || [];

returns = JSON.parse(localStorage.getItem("returns")) || [];

loadDashboard();

},1000);


// =======================================
// Greeting
// =======================================

const hour = new Date().getHours();

let greeting = "";

if(hour < 12){

greeting = "Good Morning ☀️";

}
else if(hour < 17){

greeting = "Good Afternoon 🌤";

}
else{

greeting = "Good Evening 🌙";

}

console.log(greeting);


// =======================================
// Current Date
// =======================================

console.log(

new Date().toLocaleDateString()

);


// =======================================
// Dashboard Ready
// =======================================

console.log(

"Smart Library Dashboard Loaded Successfully"

);