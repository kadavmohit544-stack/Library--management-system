// ===============================
// Smart Library Books Management
// ===============================

let books = JSON.parse(localStorage.getItem("books")) || [

{
id:1,
name:"Java Programming",
author:"James Gosling",
category:"Programming",
copies:10,
image:"images/books/java.jpg"
},

{
id:2,
name:"Python Programming",
author:"Guido van Rossum",
category:"Programming",
copies:8,
image:"images/books/python.jpg"
},

{
id:3,
name:"Database Management",
author:"Abraham Silberschatz",
category:"Database",
copies:5,
image:"images/books/dbms.jpg"
},

{
id:4,
name:"Computer Networks",
author:"Andrew Tanenbaum",
category:"Networking",
copies:7,
image:"images/books/network.jpg"
}

];

const table = document.getElementById("bookTable");

const modal = document.getElementById("bookModal");

const addBtn = document.getElementById("addBookBtn");

const closeBtn = document.querySelector(".close");

const form = document.getElementById("bookForm");

const modalTitle = document.getElementById("modalTitle");

let editIndex = -1;


// ===============================
// Save LocalStorage
// ===============================

function saveBooks(){

localStorage.setItem("books",JSON.stringify(books));

}


// ===============================
// Render Table
// ===============================

function renderBooks(){

table.innerHTML="";

books.forEach((book,index)=>{

let status = book.copies>0
?
'<span class="status available">Available</span>'
:
'<span class="status unavailable">Unavailable</span>';

table.innerHTML += `

<tr>

<td>${book.id}</td>

<td>

<img
src="${book.image}"
onerror="this.src='images/books/default.png'">

</td>

<td>${book.name}</td>

<td>${book.author}</td>

<td>${book.category}</td>

<td>${book.copies}</td>

<td>${status}</td>

<td>

<button
class="action-btn edit-btn"
onclick="editBook(${index})">

<i class="fas fa-edit"></i>

</button>

<button
class="action-btn delete-btn"
onclick="deleteBook(${index})">

<i class="fas fa-trash"></i>

</button>

</td>

</tr>

`;

});

}

renderBooks();


// ===============================
// Open Modal
// ===============================

addBtn.onclick=()=>{

modal.style.display="flex";

form.reset();

modalTitle.innerHTML="Add Book";

editIndex=-1;

}


closeBtn.onclick=()=>{

modal.style.display="none";

}

window.onclick=(e)=>{

if(e.target==modal){

modal.style.display="none";

}

}


// ===============================
// Add Book
// ===============================

form.addEventListener("submit",(e)=>{

e.preventDefault();

const newBook={

id:
editIndex==-1
?
Date.now()
:
books[editIndex].id,

name:
document.getElementById("bookName").value,

author:
document.getElementById("author").value,

category:
document.getElementById("category").value,

copies:
parseInt(document.getElementById("copies").value),

image:
document.getElementById("image").value
||
"images/books/default.png"

};

if(editIndex==-1){

books.push(newBook);

}

else{

books[editIndex]=newBook;

}

saveBooks();

renderBooks();

modal.style.display="none";

});
// ===============================
// Edit Book
// ===============================

function editBook(index){

editIndex=index;

const book=books[index];

document.getElementById("bookId").value=book.id;
document.getElementById("bookName").value=book.name;
document.getElementById("author").value=book.author;
document.getElementById("category").value=book.category;
document.getElementById("copies").value=book.copies;
document.getElementById("image").value=book.image;

modalTitle.innerHTML="Edit Book";

modal.style.display="flex";

}


// ===============================
// Delete Book
// ===============================

function deleteBook(index){

const ok=confirm(
`Delete "${books[index].name}" ?`
);

if(!ok) return;

books.splice(index,1);

saveBooks();

renderBooks();

showToast("Book Deleted Successfully");

}


// ===============================
// Search Books
// ===============================

const searchInput=document.getElementById("searchInput");

searchInput.addEventListener("keyup",filterBooks);


// ===============================
// Category Filter
// ===============================

const categoryFilter=document.getElementById("categoryFilter");

categoryFilter.addEventListener("change",filterBooks);


// ===============================
// Filter Function
// ===============================

function filterBooks(){

const search=searchInput.value.toLowerCase();

const category=categoryFilter.value;

table.innerHTML="";

books.forEach((book,index)=>{

const matchSearch=

book.name.toLowerCase().includes(search)

||

book.author.toLowerCase().includes(search);

const matchCategory=

category==="All"

||

book.category===category;

if(matchSearch && matchCategory){

let status=

book.copies>0

?

'<span class="status available">Available</span>'

:

'<span class="status unavailable">Unavailable</span>';

table.innerHTML+=`

<tr>

<td>${book.id}</td>

<td>

<img
src="${book.image}"
onerror="this.src='images/books/default.png'">

</td>

<td>${book.name}</td>

<td>${book.author}</td>

<td>${book.category}</td>

<td>${book.copies}</td>

<td>${status}</td>

<td>

<button
class="action-btn edit-btn"
onclick="editBook(${index})">

<i class="fas fa-edit"></i>

</button>

<button
class="action-btn delete-btn"
onclick="deleteBook(${index})">

<i class="fas fa-trash"></i>

</button>

</td>

</tr>

`;

}

});

}


// ===============================
// Toast Notification
// ===============================

function showToast(message){

let toast=document.createElement("div");

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


// ===============================
// Total Books Counter
// ===============================

function totalBooks(){

return books.length;

}

console.log("Total Books :",totalBooks());
// =======================================
// Export JSON
// =======================================

document.getElementById("exportBtn").onclick=()=>{

const data=JSON.stringify(books,null,4);

const blob=new Blob([data],{
type:"application/json"
});

const url=URL.createObjectURL(blob);

const a=document.createElement("a");

a.href=url;

a.download="books.json";

a.click();

URL.revokeObjectURL(url);

showToast("Books Exported");

};


// =======================================
// Import JSON
// =======================================

document.getElementById("importBtn").onclick=()=>{

document.getElementById("importFile").click();

};


document.getElementById("importFile")
.addEventListener("change",(e)=>{

const file=e.target.files[0];

if(!file) return;

const reader=new FileReader();

reader.onload=function(event){

try{

books=JSON.parse(event.target.result);

saveBooks();

renderBooks();

showToast("Books Imported");

}

catch{

alert("Invalid JSON File");

}

};

reader.readAsText(file);

});


// =======================================
// Print
// =======================================

document.getElementById("printBtn").onclick=()=>{

window.print();

};