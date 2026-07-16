// ==========================
// Smart Library Donation JS
// ==========================

const form = document.getElementById("donationForm");
const table = document.getElementById("donationTable");

let donations = JSON.parse(localStorage.getItem("donations")) || [];

// Load Data
window.onload = function () {
    displayDonations();
    updateCards();
};

// Save Donation
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const donation = {

        receipt: "DON" + String(donations.length + 1).padStart(3, "0"),

        name: document.getElementById("name").value,

        mobile: document.getElementById("mobile").value,

        email: document.getElementById("email").value,

        amount: Number(document.getElementById("amount").value),

        payment: document.getElementById("payment").value,

        transaction: document.getElementById("transaction").value,

        date: document.getElementById("date").value,

        purpose: document.getElementById("purpose").value,

        remark: document.getElementById("remark").value

    };

    donations.push(donation);

    localStorage.setItem("donations", JSON.stringify(donations));

    form.reset();

    displayDonations();

    updateCards();

    alert("Donation Saved Successfully.");

});

// Display Table

function displayDonations() {

    table.innerHTML = "";

    donations.forEach((d, index) => {

        table.innerHTML += `

<tr>

<td>${d.receipt}</td>

<td>${d.name}</td>

<td>₹${d.amount}</td>

<td>${d.payment}</td>

<td>${d.date}</td>

<td>

<button onclick="printReceipt(${index})">

<i class="fa fa-print"></i>

</button>

<button onclick="deleteDonation(${index})">

<i class="fa fa-trash"></i>

</button>

</td>

</tr>

`;

    });

}

// Dashboard Cards

function updateCards() {

    let total = 0;

    let today = 0;

    let todayDate = new Date().toISOString().split("T")[0];

    donations.forEach(d => {

        total += d.amount;

        if (d.date === todayDate) {

            today += d.amount;

        }

    });

    document.getElementById("totalDonation").innerHTML = total;

    document.getElementById("todayDonation").innerHTML = today;

    document.getElementById("totalDonors").innerHTML = donations.length;

}

// Delete

function deleteDonation(index) {

    if (confirm("Delete this donation?")) {

        donations.splice(index, 1);

        localStorage.setItem("donations", JSON.stringify(donations));

        displayDonations();

        updateCards();

    }

}

// Receipt

function printReceipt(index) {

    const d = donations[index];

    const receiptWindow = window.open("", "_blank", "width=900,height=800");

    receiptWindow.document.write(`
<!DOCTYPE html>
<html>
<head>

<title>Donation Receipt</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#f5f7fb;
padding:30px;
}

.receipt{

max-width:800px;
margin:auto;
background:#fff;
border:3px solid #2563eb;
border-radius:12px;
overflow:hidden;
box-shadow:0 10px 30px rgba(0,0,0,.15);

}

.header{

background:#2563eb;
color:white;
padding:20px;
display:flex;
justify-content:space-between;
align-items:center;

}

.logo{

font-size:26px;
font-weight:bold;

}

.title{

text-align:right;

}

.content{

padding:30px;

}

.info{

display:flex;
justify-content:space-between;
margin-bottom:20px;

}

.info div{

line-height:28px;

}

table{

width:100%;
border-collapse:collapse;
margin-top:20px;

}

th{

background:#2563eb;
color:white;
padding:12px;

}

td{

padding:12px;
border:1px solid #ddd;

}

.amount{

margin-top:30px;
padding:20px;
background:#eef5ff;
border-left:6px solid #2563eb;
display:flex;
justify-content:space-between;
align-items:center;

}

.amount h1{

color:green;
font-size:38px;

}

.footer{

margin-top:50px;
display:flex;
justify-content:space-between;
text-align:center;

}

.footer div{

width:220px;

}

.footer hr{

margin-bottom:8px;

}

.note{

margin-top:30px;
background:#fff8dc;
padding:15px;
border-left:5px solid orange;

}

.bottom{

margin-top:25px;
background:#1e3a8a;
color:white;
text-align:center;
padding:15px;

}

@media print{

body{

background:white;

}

.receipt{

box-shadow:none;
border:2px solid black;

}

}

</style>

</head>

<body onload="window.print()">

<div class="receipt">

<div class="header">

<div class="logo">

📚 SMART DIGITAL LIBRARY

</div>

<div class="title">

<h2>DONATION RECEIPT</h2>

Receipt No : ${d.receipt}

</div>

</div>

<div class="content">

<div class="info">

<div>

<strong>Donor Name:</strong> ${d.name}<br>

<strong>Mobile:</strong> ${d.mobile}<br>

<strong>Email:</strong> ${d.email || "-"}

</div>

<div>

<strong>Date:</strong> ${d.date}<br>

<strong>Payment:</strong> ${d.payment}<br>

<strong>Transaction:</strong> ${d.transaction || "-"}

</div>

</div>

<table>

<tr>

<th>Description</th>

<th>Details</th>

</tr>

<tr>

<td>Donation Amount</td>

<td>₹ ${d.amount}</td>

</tr>

<tr>

<td>Purpose</td>

<td>${d.purpose || "-"}</td>

</tr>

<tr>

<td>Remark</td>

<td>${d.remark || "-"}</td>

</tr>

<tr>

<td>Status</td>

<td style="color:green;font-weight:bold;">
Received Successfully
</td>

</tr>

</table>

<div class="amount">

<div>

<p>Total Donation</p>

<h1>₹ ${d.amount}</h1>

</div>

<div>

<strong>❤️ Thank You For Supporting Our Library ❤️</strong>

</div>

</div>

<div class="footer">

<div>

_____________________

<br>

Donor Signature

</div>

<div>

_____________________

<br>

Librarian Signature

</div>

</div>

<div class="note">

This is a computer-generated donation receipt. Please keep it for future reference.

</div>

</div>

<div class="bottom">

Government Polytechnic Library | Nagpur

<br>

Phone : +91 9876543210

<br>

Email : library@gmail.com

</div>

</div>

</body>

</html>

`);

    receiptWindow.document.close();

}