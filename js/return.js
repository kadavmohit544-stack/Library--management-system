// ======================================
// Smart Library - Return Book Management
// ======================================

// LocalStorage Data
let books = JSON.parse(localStorage.getItem("books")) || [];
let issues = JSON.parse(localStorage.getItem("issues")) || [];
let returns = JSON.parse(localStorage.getItem("returns")) || [];

// Elements
const issueRecord = document.getElementById("issueRecord");
const returnDate = document.getElementById("returnDate");
const fineInput = document.getElementById("fine");
const returnTable = document.getElementById("returnTable");
const searchReturn = document.getElementById("searchReturn");
const returnBtn = document.getElementById("returnBtn");

// ======================================
// Today's Date
// ======================================

const today = new Date();

returnDate.value = today.toISOString().split("T")[0];

// ======================================
// Load Issued Books
// ======================================

function loadIssueRecords(){

    issueRecord.innerHTML =
    '<option value="">Select Issued Book</option>';

    issues.forEach((item,index)=>{

        issueRecord.innerHTML += `

        <option value="${index}">

        ${item.student} | ${item.book}

        </option>

        `;

    });

}

loadIssueRecords();

// ======================================
// Fine Calculation
// ₹10 per late day
// ======================================

issueRecord.addEventListener("change",calculateFine);

returnDate.addEventListener("change",calculateFine);

function calculateFine(){

    if(issueRecord.value===""){

        fineInput.value=0;

        return;

    }

    const record = issues[issueRecord.value];

    const due = new Date(record.dueDate);

    const returned = new Date(returnDate.value);

    let lateDays = Math.floor(

        (returned-due)/(1000*60*60*24)

    );

    if(lateDays<0){

        lateDays=0;

    }

    fineInput.value = lateDays*10;

}

// ======================================
// Render Return Table
// ======================================

function renderReturns(list=returns){

    returnTable.innerHTML="";

    list.forEach((item,index)=>{

        returnTable.innerHTML += `

        <tr>

        <td>${index+1}</td>

        <td>${item.student}</td>

        <td>${item.book}</td>

        <td>${item.returnDate}</td>

        <td class="fine">

        ₹${item.fine}

        </td>

        <td>

        <span class="status returned">

        Returned

        </span>

        </td>

        </tr>

        `;

    });

}

renderReturns();
// ======================================
// Return Book
// ======================================

returnBtn.addEventListener("click", returnBook);

function returnBook() {

    if (issueRecord.value === "") {

        alert("Please select an issued book.");

        return;
    }

    const index = parseInt(issueRecord.value);

    const record = issues[index];

    // Create Return Record
    const returnData = {

        id: Date.now(),

        student: record.student,

        book: record.book,

        issueDate: record.issueDate,

        dueDate: record.dueDate,

        returnDate: returnDate.value,

        fine: Number(fineInput.value),

        status: "Returned"

    };

    // Save Return Record
    returns.push(returnData);

    localStorage.setItem(
        "returns",
        JSON.stringify(returns)
    );

    // Restore Book Stock
    const book = books.find(b => b.name === record.book);

    if (book) {

        book.copies++;

        localStorage.setItem(
            "books",
            JSON.stringify(books)
        );

    }

    // Remove Issue Record
    issues.splice(index, 1);

    localStorage.setItem(
        "issues",
        JSON.stringify(issues)
    );

    // Refresh UI
    loadIssueRecords();

    renderReturns();

    updateDashboard();

    showToast("Book Returned Successfully");

    // Reset Form
    issueRecord.value = "";

    fineInput.value = 0;

    returnDate.value =
        new Date().toISOString().split("T")[0];

}


// ======================================
// Dashboard Counter
// ======================================

function updateDashboard() {

    localStorage.setItem(
        "totalIssued",
        issues.length
    );

    localStorage.setItem(
        "totalReturned",
        returns.length
    );

}

updateDashboard();
// ======================================
// Live Search
// ======================================

searchReturn.addEventListener("keyup", () => {

    const keyword = searchReturn.value.toLowerCase();

    const filtered = returns.filter(item => {

        return (

            item.student.toLowerCase().includes(keyword) ||

            item.book.toLowerCase().includes(keyword)

        );

    });

    renderReturns(filtered);

});


// ======================================
// Delete Return Record
// ======================================

function deleteReturn(index){

    if(!confirm("Delete this return record?")){

        return;

    }

    returns.splice(index,1);

    localStorage.setItem(

        "returns",

        JSON.stringify(returns)

    );

    renderReturns();

    updateDashboard();

    showToast("Return Record Deleted");

}


// ======================================
// Export Return History
// ======================================

function exportReturns(){

    const data = JSON.stringify(

        returns,

        null,

        4

    );

    const blob = new Blob(

        [data],

        {

            type:"application/json"

        }

    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "return-history.json";

    a.click();

    URL.revokeObjectURL(url);

    showToast("Return History Exported");

}


// ======================================
// Print Report
// ======================================

function printReturns(){

    window.print();

}


// ======================================
// Toast Notification
// ======================================

function showToast(message){

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.remove();

    },3000);

}