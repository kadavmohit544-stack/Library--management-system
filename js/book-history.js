// ======================================
// Book History JavaScript
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Book History Page Loaded Successfully!");

    // Welcome Message
    alert("Welcome to Book History 📚");

    // Search Function
    const searchInput = document.getElementById("searchHistory");
    const tableRows = document.querySelectorAll("#historyTable tr");

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        tableRows.forEach(function (row) {

            const bookName = row.cells[1].textContent.toLowerCase();

            if (bookName.includes(value)) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

    });

    // Highlight Selected Row
    tableRows.forEach(function (row) {

        row.addEventListener("click", function () {

            tableRows.forEach(function (r) {
                r.style.background = "";
            });

            this.style.background = "#dbeafe";

        });

    });

    // Highlight Late Return Rows
    tableRows.forEach(function (row) {

        const status = row.cells[5].textContent.trim();

        if (status === "Late Return") {

            row.style.backgroundColor = "#fff3cd";

        }

    });

    // Statistics
    let totalBooks = tableRows.length;
    let returnedBooks = 0;
    let lateReturns = 0;

    tableRows.forEach(function (row) {

        const status = row.cells[5].textContent.trim();

        if (status === "Returned") {

            returnedBooks++;

        } else if (status === "Late Return") {

            lateReturns++;

        }

    });

    console.log("Total Books :", totalBooks);
    console.log("Returned Books :", returnedBooks);
    console.log("Late Returns :", lateReturns);

});

// ======================================
// Refresh Function
// ======================================

function refreshHistory() {

    location.reload();

}

// ======================================
// Greeting Message
// ======================================

const hour = new Date().getHours();

if (hour < 12) {

    console.log("Good Morning 🌞");

} else if (hour < 18) {

    console.log("Good Afternoon ☀️");

} else {

    console.log("Good Evening 🌙");

}