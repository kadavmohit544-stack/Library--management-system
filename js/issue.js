// ======================================
// Smart Library - Issue Book Management
// ======================================

// Load Data
let books = JSON.parse(localStorage.getItem("books")) || [];
let students = JSON.parse(localStorage.getItem("students")) || [];
let issues = JSON.parse(localStorage.getItem("issues")) || [];

// Elements
const studentSelect = document.getElementById("studentName");
const bookSelect = document.getElementById("bookName");
const issueDate = document.getElementById("issueDate");
const dueDate = document.getElementById("dueDate");
const issueBtn = document.getElementById("issueBtn");
const issueTable = document.getElementById("issueTable");
const searchInput = document.getElementById("searchIssue");

// Today's Date
let today = new Date();

issueDate.value = today.toISOString().split("T")[0];

// Due Date (+7 Days)
let due = new Date();

due.setDate(today.getDate() + 7);

dueDate.value = due.toISOString().split("T")[0];

// ===========================
// Load Students
// ===========================

function loadStudents() {

    studentSelect.innerHTML =
        '<option value="">Select Student</option>';

    students.forEach(student => {

        studentSelect.innerHTML += `

        <option value="${student.name}">
            ${student.name}
        </option>

        `;

    });

}

// ===========================
// Load Books
// ===========================

function loadBooks() {

    bookSelect.innerHTML =
        '<option value="">Select Book</option>';

    books.forEach(book => {

        if (book.copies > 0) {

            bookSelect.innerHTML += `

            <option value="${book.name}">
                ${book.name}
            </option>

            `;

        }

    });

}

loadStudents();
loadBooks();

// ===========================
// Render Issue Table
// ===========================

function renderIssues(list = issues) {

    issueTable.innerHTML = "";

    list.forEach((item, index) => {

        issueTable.innerHTML += `

        <tr>

        <td>${index + 1}</td>

        <td>${item.student}</td>

        <td>${item.book}</td>

        <td>${item.issueDate}</td>

        <td>${item.dueDate}</td>

        <td>

        <span class="status issued">

        Issued

        </span>

        </td>

        <td>

        <button
        class="action-btn delete-btn"
        onclick="deleteIssue(${index})">

        <i class="fas fa-trash"></i>

        </button>

        </td>

        </tr>

        `;

    });

}

renderIssues();

// ===========================
// Issue Book
// ===========================

issueBtn.addEventListener("click", () => {

    if (
        studentSelect.value === "" ||
        bookSelect.value === ""
    ) {

        alert("Please select Student and Book.");

        return;
    }

    const record = {

        student: studentSelect.value,

        book: bookSelect.value,

        issueDate: issueDate.value,

        dueDate: dueDate.value

    };

    issues.push(record);

    localStorage.setItem(
        "issues",
        JSON.stringify(issues)
    );

    renderIssues();

    showToast("Book Issued Successfully");

});
// ======================================
// Delete Issue
// ======================================

function deleteIssue(index){

    if(!confirm("Delete this issue record?")) return;

    const deletedIssue = issues[index];

    // Book copy restore
    const book = books.find(b => b.name === deletedIssue.book);

    if(book){
        book.copies++;
        localStorage.setItem("books", JSON.stringify(books));
    }

    issues.splice(index,1);

    localStorage.setItem("issues", JSON.stringify(issues));

    renderIssues();

    loadBooks();

    updateDashboard();

    showToast("Issue Record Deleted");

}


// ======================================
// Reduce Book Copies
// ======================================

function reduceBookCopies(bookName){

    const book = books.find(b => b.name === bookName);

    if(book && book.copies > 0){

        book.copies--;

        localStorage.setItem("books",JSON.stringify(books));

    }

}


// ======================================
// Update Issue Button
// ======================================

issueBtn.addEventListener("click",()=>{

    if(studentSelect.value==="" || bookSelect.value===""){

        return;

    }

    reduceBookCopies(bookSelect.value);

    loadBooks();

    updateDashboard();

});


// ======================================
// Search Issue Records
// ======================================

searchInput.addEventListener("keyup",()=>{

    const value = searchInput.value.toLowerCase();

    const filtered = issues.filter(issue=>{

        return(

            issue.student.toLowerCase().includes(value)

            ||

            issue.book.toLowerCase().includes(value)

        );

    });

    renderIssues(filtered);

});


// ======================================
// Dashboard Counter
// ======================================

function updateDashboard(){

    localStorage.setItem(

        "totalIssued",

        issues.length

    );

}

updateDashboard();


// ======================================
// Toast Notification
// ======================================

function showToast(message){

    const toast = document.createElement("div");

    toast.className="toast";

    toast.innerHTML=message;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.remove();

    },3000);

}