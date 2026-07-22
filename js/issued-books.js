// ===================================
// Issued Books JavaScript
// ===================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Issued Books Page Loaded");

    // Welcome Message
    alert("Welcome to My Issued Books 📚");

    // Search Function
    const searchInput = document.getElementById("searchInput");
    const tableRows = document.querySelectorAll("#bookTable tr");

    searchInput.addEventListener("keyup", function () {

        const value = searchInput.value.toLowerCase();

        tableRows.forEach(function (row) {

            const bookName = row.cells[1].textContent.toLowerCase();

            if (bookName.includes(value)) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

    });

    // Total Books
    const totalBooks = tableRows.length;

    console.log("Total Issued Books :", totalBooks);

    // Highlight Table Row
    tableRows.forEach(function (row) {

        row.addEventListener("click", function () {

            tableRows.forEach(function (r) {
                r.style.background = "";
            });

            row.style.background = "#dbeafe";

        });

    });

    // Due Book Alert
    tableRows.forEach(function (row) {

        const status = row.cells[5].textContent.trim();

        if (status === "Due") {

            row.style.background = "#fff3cd";

        }

    });

});

// ===================================
// Refresh Button Function (Optional)
// ===================================

function refreshBooks() {

    location.reload();

}