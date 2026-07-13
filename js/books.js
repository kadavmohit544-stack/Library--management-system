/* ==========================================
   SMART DIGITAL LIBRARY
   BOOKS PAGE JAVASCRIPT
========================================== */

// ==========================
// BOOK DATABASE
// ==========================

let books = [

{
id:1,
title:"HTML & CSS",
author:"Jon Duckett",
category:"Computer Engineering",
rating:5,
available:true
},

{
id:2,
title:"Java Programming",
author:"Herbert Schildt",
category:"Programming",
rating:5,
available:true
},

{
id:3,
title:"Python Programming",
author:"Mark Lutz",
category:"Programming",
rating:5,
available:true
},

{
id:4,
title:"Database System",
author:"Korth",
category:"Database",
rating:4,
available:false
},

{
id:5,
title:"Computer Networks",
author:"Andrew Tanenbaum",
category:"Computer Engineering",
rating:5,
available:true
},

{
id:6,
title:"Operating System",
author:"Galvin",
category:"Computer Engineering",
rating:5,
available:true
},

{
id:7,
title:"C Programming",
author:"Dennis Ritchie",
category:"Programming",
rating:4,
available:true
},

{
id:8,
title:"Data Structure",
author:"Schaum",
category:"Programming",
rating:5,
available:true
}

];

// ==========================
// ELEMENTS
// ==========================

const searchInput=document.getElementById("searchBook");
const categoryFilter=document.getElementById("categoryFilter");
const sortBooks=document.getElementById("sortBooks");

const cards=document.querySelectorAll(".book-card");

// ==========================
// LIVE SEARCH
// ==========================

function searchLibrary(){

const value=searchInput.value.toLowerCase();

cards.forEach(card=>{

const title=card.querySelector("h3").innerText.toLowerCase();

if(title.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

}

searchInput.addEventListener("keyup",searchLibrary);

// ==========================
// CATEGORY FILTER
// ==========================

function filterBooks(){

const value=categoryFilter.value.toLowerCase();

cards.forEach(card=>{

const category=card.querySelector("span").innerText.toLowerCase();

if(value==="" || category.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

}

categoryFilter.addEventListener("change",filterBooks);

// ==========================
// SORT BOOKS
// ==========================

sortBooks.addEventListener("change",()=>{

const container=document.querySelector(".books-grid");

const items=[...container.children];

items.sort((a,b)=>{

const first=a.querySelector("h3").innerText;

const second=b.querySelector("h3").innerText;

if(sortBooks.value==="az"){

return first.localeCompare(second);

}

if(sortBooks.value==="za"){

return second.localeCompare(first);

}

return 0;

});

container.innerHTML="";

items.forEach(item=>container.appendChild(item));

});

// ==========================
// VIEW DETAILS
// ==========================

document.querySelectorAll(".view-btn").forEach(button=>{

button.addEventListener("click",()=>{

const card=button.closest(".book-card");

const title=card.querySelector("h3").innerText;

const author=card.querySelector("p").innerText;

const category=card.querySelector("span").innerText;

alert(

"📚 "+title+

"\n\n"+author+

"\nCategory : "+category

);

});

});

// ==========================
// BORROW BOOK
// ==========================

document.querySelectorAll(".borrow-btn").forEach(button=>{

button.addEventListener("click",()=>{

const card=button.closest(".book-card");

const title=card.querySelector("h3").innerText;

alert(

"✅ '"+title+"' borrowed successfully."

);

});

});

console.log("Books Page Loaded Successfully");
/* ==========================================
   WISHLIST (LOCAL STORAGE)
========================================== */

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

document.querySelectorAll(".favorite").forEach((icon) => {

    icon.addEventListener("click", () => {

        const card = icon.closest(".book-card");
        const title = card.querySelector("h3").innerText;

        if (!wishlist.includes(title)) {

            wishlist.push(title);

            localStorage.setItem("wishlist", JSON.stringify(wishlist));

            icon.innerHTML = "❤";
            icon.style.color = "red";

            showToast(title + " added to wishlist ❤️");

        } else {

            wishlist = wishlist.filter(book => book !== title);

            localStorage.setItem("wishlist", JSON.stringify(wishlist));

            icon.innerHTML = "♡";
            icon.style.color = "";

            showToast(title + " removed from wishlist");
        }

    });

});

/* ==========================================
   TOAST NOTIFICATION
========================================== */

function showToast(message){

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerText = message;

    document.body.appendChild(toast);

    Object.assign(toast.style,{

        position:"fixed",
        bottom:"30px",
        left:"50%",
        transform:"translateX(-50%)",
        background:"#2563eb",
        color:"#fff",
        padding:"15px 25px",
        borderRadius:"8px",
        fontSize:"15px",
        zIndex:"9999",
        boxShadow:"0 5px 15px rgba(0,0,0,.2)"

    });

    setTimeout(()=>{

        toast.style.opacity="0";

        toast.style.transition=".5s";

    },2000);

    setTimeout(()=>{

        toast.remove();

    },2500);

}

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealItems = document.querySelectorAll(".book-card");

function revealCards(){

    revealItems.forEach(card=>{

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            card.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealCards);

window.addEventListener("load",revealCards);

/* ==========================================
   BACK TO TOP
========================================== */

const topBtn = document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

/* ==========================================
   DARK MODE
========================================== */

const darkBtn = document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.id="darkMode";

document.body.appendChild(darkBtn);

Object.assign(darkBtn.style,{

position:"fixed",

left:"20px",

bottom:"30px",

width:"50px",

height:"50px",

border:"none",

borderRadius:"50%",

background:"#111827",

color:"#fff",

cursor:"pointer",

fontSize:"20px",

zIndex:"999"

});

darkBtn.onclick=()=>{

document.body.classList.toggle("dark");

};

/* ==========================================
   LOADING EFFECT
========================================== */

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

loader.style.pointerEvents="none";

setTimeout(()=>{

loader.remove();

},500);

}

});

/* ==========================================
   PAGINATION DEMO
========================================== */

document.querySelectorAll(".pagination button").forEach(btn=>{

btn.addEventListener("click",()=>{

document.querySelectorAll(".pagination button").forEach(b=>{

b.classList.remove("active");

});

btn.classList.add("active");

});

});

/* ==========================================
   PAGE READY
========================================== */

console.log("📚 Books Page Fully Loaded");