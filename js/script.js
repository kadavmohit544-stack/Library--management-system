// ===== Sample Data =====
let books = JSON.parse(localStorage.getItem("books")) || [
    {
        id: 1,
        title: "Java Programming",
        author: "James Gosling",
        category: "Programming",
        status: "Available"
    },
    {
        id: 2,
        title: "Python Basics",
        author: "Guido van Rossum",
        category: "Programming",
        status: "Issued"
    }
];

// ===== Elements =====
const table = document.getElementById("bookTable");
const search = document.getElementById("searchBook");
const filter = document.getElementById("categoryFilter");
const addBtn = document.getElementById("addBookBtn");

// ===== Save =====
function saveBooks() {
    localStorage.setItem("books", JSON.stringify(books));
}

// ===== Display =====
function displayBooks(list = books) {

    table.innerHTML = "";

    list.forEach((book, index) => {

        table.innerHTML += `
        <tr>

            <td>${book.id}</td>

            <td>${book.title}</td>

            <td>${book.author}</td>

            <td>${book.category}</td>

            <td>
                <span class="${book.status === "Available" ? "available" : "issued"}">
                    ${book.status}
                </span>
            </td>

            <td>

                <button class="edit" onclick="editBook(${index})">
                    <i class="fas fa-edit"></i>
                </button>

                <button class="delete" onclick="deleteBook(${index})">
                    <i class="fas fa-trash"></i>
                </button>

            </td>

        </tr>
        `;
    });

    saveBooks();
}

// ===== Add Book =====
const modal = document.getElementById("bookModal");
const form = document.getElementById("bookForm");
const closeModal = document.getElementById("closeModal");

addBtn.onclick = () => {

    modal.style.display = "flex";

};

closeModal.onclick = () => {

    modal.style.display = "none";

};

form.onsubmit = function(e){

    e.preventDefault();

    books.push({

        id: Date.now(),

        title: title.value,

        author: author.value,

        category: category.value,

        status:"Available"

    });

    saveBooks();

    displayBooks();

    form.reset();

    modal.style.display="none";

};

// ===== Delete =====
function deleteBook(index) {

    if (confirm("Delete this book?")) {

        books.splice(index, 1);

        displayBooks();

    }

}

// ===== Edit =====
function editBook(index) {

    let book = books[index];

    const title = prompt("Book Name", book.title);
    if (!title) return;

    const author = prompt("Author Name", book.author);
    if (!author) return;

    const category = prompt("Category", book.category);
    if (!category) return;

    book.title = title;
    book.author = author;
    book.category = category;

    displayBooks();

}

// ===== Search =====
search.addEventListener("keyup", () => {

    const value = search.value.toLowerCase();

    const result = books.filter(book =>
        book.title.toLowerCase().includes(value)
    );

    displayBooks(result);

});

// ===== Category Filter =====
filter.addEventListener("change", () => {

    const value = filter.value;

    if (value === "") {

        displayBooks();

    } else {

        const result = books.filter(book =>
            book.category === value
        );

        displayBooks(result);

    }

});

// ===== Start =====
displayBooks();
// ===============================
// HOME PAGE SCRIPT
// ===============================

// Login
const loginBtn = document.querySelector(".login-btn");

if (loginBtn) {
    loginBtn.onclick = () => {
        window.location.href = "login.html";
    };
}

// Register
const registerBtn = document.querySelector(".register-btn");

if (registerBtn) {
    registerBtn.onclick = () => {
        window.location.href = "register.html";
    };
}

// Explore Books
const exploreBtn = document.querySelector(".explore");

if (exploreBtn) {
    exploreBtn.onclick = () => {
        window.location.href = "books.html";
    };
}

// Digital Library
const digitalBtn = document.querySelector(".digital");

if (digitalBtn) {
    digitalBtn.onclick = () => {
        window.location.href = "dashboard.html";
    };
}
// ===============================
// Dynamic Statistics
// ===============================

function loadStatistics() {

    const books = JSON.parse(localStorage.getItem("books")) || [];
    const students = JSON.parse(localStorage.getItem("students")) || [];

    document.getElementById("bookCount").textContent = books.length;

    document.getElementById("studentCount").textContent = students.length;

    // Unique Authors
    const authors = [...new Set(books.map(book => book.author))];

    document.getElementById("authorCount").textContent = authors.length;

    const ebooks = books.filter(book => book.type === "E-Book");

    document.getElementById("ebookCount").textContent = ebooks.length;

}

loadStatistics();
const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

if (searchButton) {

    searchButton.onclick = () => {

        const keyword = searchInput.value.trim().toLowerCase();

        if (!keyword) {

            alert("Please enter a book name.");

            return;

        }

        localStorage.setItem("searchBook", keyword);

        window.location.href = "books.html";

    };

}
// ===============================
// View Book Details
// ===============================

function viewBook(bookName) {

    // Book name LocalStorage me save karega
    localStorage.setItem("selectedBook", bookName);

    // Book Details Page Open
    window.location.href = "book-details.html";

}
document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
function animateCounter(id,target){

    let count=0;

    const speed=target/100;

    const interval=setInterval(()=>{

        count+=speed;

        if(count>=target){

            count=target;

            clearInterval(interval);

        }

        document.getElementById(id).innerHTML=Math.floor(count)+"+";

    },20);

}

animateCounter("bookCount",5000);

animateCounter("studentCount",1200);

animateCounter("authorCount",150);

animateCounter("ebookCount",300);
window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow="none";

    }

});
const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

    reveals.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<window.innerHeight-100){

            item.classList.add("active");

        }

    });

});
document.querySelectorAll(".faq-question").forEach(btn=>{

    btn.onclick=function(){

        const answer=this.nextElementSibling;

        answer.style.display=

        answer.style.display==="block"

        ?"none"

        :"block";

    }

});