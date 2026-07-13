// ============================================
// Smart Library Management System
// Reports Module
// ============================================

// LocalStorage Data
let books = JSON.parse(localStorage.getItem("books")) || [];
let students = JSON.parse(localStorage.getItem("students")) || [];
let issues = JSON.parse(localStorage.getItem("issues")) || [];
let returns = JSON.parse(localStorage.getItem("returns")) || [];

// Elements
const totalBooks = document.getElementById("totalBooks");
const totalStudents = document.getElementById("totalStudents");
const issuedBooks = document.getElementById("issuedBooks");
const returnedBooks = document.getElementById("returnedBooks");
const totalFine = document.getElementById("totalFine");
const availableBooks = document.getElementById("availableBooks");

const issueTable = document.getElementById("issueTable");
const returnTable = document.getElementById("returnTable");
const fineTable = document.getElementById("fineTable");

const topBooks = document.getElementById("topBooks");
const topStudents = document.getElementById("topStudents");

// ============================================
// Dashboard Summary
// ============================================

function loadSummary(){

    totalBooks.textContent = books.length;

    totalStudents.textContent = students.length;

    issuedBooks.textContent = issues.length;

    returnedBooks.textContent = returns.length;

    availableBooks.textContent = books.length - issues.length + returns.length;

    let fine = 0;

    returns.forEach(item=>{

        fine += Number(item.fine || 0);

    });

    totalFine.textContent = "₹" + fine;

}

loadSummary();


// ============================================
// Issue Report
// ============================================

function loadIssueTable(){

    if(!issueTable) return;

    issueTable.innerHTML = "";

    issues.forEach((item,index)=>{

        issueTable.innerHTML += `

        <tr>

            <td>${index+1}</td>

            <td>${item.student}</td>

            <td>${item.book}</td>

            <td>${item.issueDate}</td>

            <td>${item.dueDate}</td>

            <td>

                <span class="status issued">

                    Issued

                </span>

            </td>

        </tr>

        `;

    });

}

loadIssueTable();


// ============================================
// Return Report
// ============================================

function loadReturnTable(){

    if(!returnTable) return;

    returnTable.innerHTML = "";

    returns.forEach((item,index)=>{

        returnTable.innerHTML += `

        <tr>

            <td>${index+1}</td>

            <td>${item.student}</td>

            <td>${item.book}</td>

            <td>${item.returnDate}</td>

            <td>₹${item.fine || 0}</td>

            <td>

                <span class="status returned">

                    Returned

                </span>

            </td>

        </tr>

        `;

    });

}

loadReturnTable();


// ============================================
// Fine Report
// ============================================

function loadFineTable(){

    if(!fineTable) return;

    fineTable.innerHTML="";

    returns.forEach(item=>{

        if(Number(item.fine)>0){

            fineTable.innerHTML+=`

            <tr>

                <td>${item.student}</td>

                <td>${item.book}</td>

                <td>₹${item.fine}</td>

            </tr>

            `;

        }

    });

}

loadFineTable();


// ============================================
// Top Books
// ============================================

function loadTopBooks(){

    if(!topBooks) return;

    topBooks.innerHTML="";

    let count={};

    issues.forEach(item=>{

        count[item.book]=(count[item.book]||0)+1;

    });

    Object.entries(count)

    .sort((a,b)=>b[1]-a[1])

    .slice(0,5)

    .forEach(book=>{

        topBooks.innerHTML+=`

        <li>

            <span>${book[0]}</span>

            <strong>${book[1]} Times</strong>

        </li>

        `;

    });

}

loadTopBooks();


// ============================================
// Top Students
// ============================================

function loadTopStudents(){

    if(!topStudents) return;

    topStudents.innerHTML="";

    let count={};

    issues.forEach(item=>{

        count[item.student]=(count[item.student]||0)+1;

    });

    Object.entries(count)

    .sort((a,b)=>b[1]-a[1])

    .slice(0,5)

    .forEach(student=>{

        topStudents.innerHTML+=`

        <li>

            <span>${student[0]}</span>

            <strong>${student[1]} Books</strong>

        </li>

        `;

    });

}

loadTopStudents();


// ============================================
// Search
// ============================================

const search=document.getElementById("searchReport");

if(search){

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

document.querySelectorAll("#issueTable tr").forEach(row=>{

row.style.display=row.innerText.toLowerCase().includes(value)

?"":"none";

});

});

}


// ============================================
// Print
// ============================================

const printBtn=document.getElementById("printBtn");

if(printBtn){

printBtn.onclick=()=>window.print();

}


// ============================================
// Export CSV
// ============================================

const exportBtn=document.getElementById("exportBtn");

if(exportBtn){

exportBtn.onclick=function(){

let csv="Student,Book,Issue Date,Due Date\n";

issues.forEach(item=>{

csv+=`${item.student},${item.book},${item.issueDate},${item.dueDate}\n`;

});

const blob=new Blob([csv],{type:"text/csv"});

const url=URL.createObjectURL(blob);

const a=document.createElement("a");

a.href=url;

a.download="Library_Report.csv";

a.click();

};

}


// ============================================
// Charts
// ============================================

const issueChart=document.getElementById("issueChart");

if(issueChart){

new Chart(issueChart,{

type:"bar",

data:{

labels:["Jan","Feb","Mar","Apr","May","Jun"],

datasets:[{

label:"Issued Books",

data:[12,18,10,22,15,30]

}]

}

});

}

const categoryChart=document.getElementById("categoryChart");

if(categoryChart){

new Chart(categoryChart,{

type:"pie",

data:{

labels:["Computer","Database","Networking","AI"],

datasets:[{

data:[25,15,20,10]

}]

}

});

}

console.log("Reports Loaded Successfully");