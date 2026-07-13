/* ==========================================
   SMART DIGITAL LIBRARY
   CONTACT PAGE JAVASCRIPT
========================================== */

// ==========================================
// CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const inputs=this.querySelectorAll("input, textarea");

let data={};

inputs.forEach(input=>{

data[input.placeholder]=input.value.trim();

});

let messages=JSON.parse(localStorage.getItem("libraryMessages")) || [];

messages.push(data);

localStorage.setItem("libraryMessages",JSON.stringify(messages));

showToast("✅ Message Sent Successfully!");

this.reset();

});

}

/* ==========================================
   TOAST NOTIFICATION
========================================== */

function showToast(message){

const toast=document.createElement("div");

toast.innerHTML=message;

Object.assign(toast.style,{

position:"fixed",

bottom:"30px",

right:"30px",

background:"#2563eb",

color:"#fff",

padding:"15px 25px",

borderRadius:"8px",

fontSize:"15px",

boxShadow:"0 8px 20px rgba(0,0,0,.2)",

zIndex:"9999"

});

document.body.appendChild(toast);

setTimeout(()=>{

toast.style.opacity="0";

toast.style.transition=".5s";

},2000);

setTimeout(()=>{

toast.remove();

},2600);

}

/* ==========================================
   FORM VALIDATION
========================================== */

const inputs=document.querySelectorAll("input,textarea");

inputs.forEach(input=>{

input.addEventListener("blur",()=>{

if(input.value.trim()===""){

input.style.borderColor="red";

}

else{

input.style.borderColor="#10b981";

}

});

});

/* ==========================================
   PAGE READY
========================================== */

console.log("📩 Contact Page Loaded Successfully");
/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn = document.createElement("button");

topBtn.id = "topBtn";
topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ==========================================
   DARK MODE
========================================== */

const darkBtn = document.createElement("button");

darkBtn.id = "darkMode";
darkBtn.innerHTML = "🌙";

Object.assign(darkBtn.style, {

    position: "fixed",
    left: "20px",
    bottom: "30px",
    width: "50px",
    height: "50px",
    border: "none",
    borderRadius: "50%",
    background: "#111827",
    color: "#fff",
    cursor: "pointer",
    fontSize: "20px",
    zIndex: "999"

});

document.body.appendChild(darkBtn);

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

}

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    localStorage.setItem(

        "theme",

        document.body.classList.contains("dark")
        ? "dark"
        : "light"

    );

});

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealItems = document.querySelectorAll(

".info-card,.contact-form,.map,.social"

);

function revealAnimation(){

    revealItems.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<window.innerHeight-100){

            item.classList.add("active");
            item.classList.add("reveal");

        }

    });

}

window.addEventListener("scroll",revealAnimation);

window.addEventListener("load",revealAnimation);

/* ==========================================
   LOADER
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
   PAGE READY
========================================== */

console.log("📞 Contact Page Fully Loaded");