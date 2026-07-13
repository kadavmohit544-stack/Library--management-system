if(localStorage.getItem("login")!="true"){

window.location.href="../login.html";

}
let books = JSON.parse(localStorage.getItem("books")) || [];

function displayBooks(){

const table=document.getElementById("bookTable");

table.innerHTML="";

books.forEach((book,index)=>{

table.innerHTML+=`

<tr>

<td>${book.name}</td>

<td>${book.author}</td>

<td>${book.copies}</td>

<td>

<button class="edit" onclick="editBook(${index})">

Edit

</button>

<button class="delete" onclick="deleteBook(${index})">

Delete

</button>

</td>

</tr>

`;

});

localStorage.setItem("books",JSON.stringify(books));

}

function addBook(){

let name=document.getElementById("bookName").value;

let author=document.getElementById("author").value;

let copies=document.getElementById("copies").value;

if(name=="" || author=="" || copies==""){

alert("Fill all fields");

return;

}

books.push({

name,

author,

copies

});

displayBooks();

document.getElementById("bookName").value="";
document.getElementById("author").value="";
document.getElementById("copies").value="";

}

function deleteBook(index){

books.splice(index,1);

displayBooks();

}

function editBook(index){

let newName=prompt("Book Name",books[index].name);

let newAuthor=prompt("Author",books[index].author);

let newCopies=prompt("Copies",books[index].copies);

if(newName && newAuthor && newCopies){

books[index]={

name:newName,

author:newAuthor,

copies:newCopies

};

displayBooks();

}

}

displayBooks();