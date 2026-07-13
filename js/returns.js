let books = JSON.parse(localStorage.getItem("books")) || [];

const table=document.getElementById("returnTable");

function loadTable(){

table.innerHTML="";

books.forEach((book,index)=>{

table.innerHTML+=`

<tr>

<td>${book.name}</td>

<td>${book.author}</td>

<td>${book.copies}</td>

<td>

<button onclick="returnBook(${index})">

Return

</button>

</td>

</tr>

`;

});

}

function returnBook(index){

books[index].copies++;

localStorage.setItem("books",JSON.stringify(books));

alert("Book Returned Successfully ✅");

loadTable();

}

loadTable();