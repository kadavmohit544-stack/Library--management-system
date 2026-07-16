
// ===============================
// Sidebar Toggle
// ===============================
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
}

// ===============================
// Dark Mode
// ===============================
const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (themeBtn) {
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';

        }

    });
}

// ===============================
// Counter Animation
// ===============================
function counter(id, end, speed = 30) {

    let count = 0;
    const element = document.getElementById(id);

    const interval = setInterval(() => {

        count++;

        element.innerText = count;

        if (count >= end) {
            clearInterval(interval);
        }

    }, speed);

}

counter("totalBooks", 560);
counter("totalStudents", 245);
counter("totalIssued", 120);
counter("totalReturned", 98);

// ===============================
// Latest Issued Books
// ===============================
const latestBooks = [

    {
        student: "Rahul Sharma",
        book: "Java Programming",
        date: "13 Jul 2026",
        status: "Issued"
    },

    {
        student: "Priya Patel",
        book: "Python Basics",
        date: "13 Jul 2026",
        status: "Issued"
    },

    {
        student: "Mohit Kadav",
        book: "Database Management",
        date: "12 Jul 2026",
        status: "Issued"
    },

    {
        student: "Amit Verma",
        book: "Computer Network",
        date: "12 Jul 2026",
        status: "Issued"
    }

];

const table = document.getElementById("latestIssueTable");

if (table) {

    latestBooks.forEach(book => {

        table.innerHTML += `
        <tr>
            <td>${book.student}</td>
            <td>${book.book}</td>
            <td>${book.date}</td>
            <td>
                <span class="status issued">${book.status}</span>
            </td>
        </tr>
        `;

    });

}

// ===============================
// Search Filter
// ===============================
const search = document.querySelector(".search input");

if (search) {

    search.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const rows = document.querySelectorAll("#latestIssueTable tr");

        rows.forEach(row => {

            row.style.display =
                row.innerText.toLowerCase().includes(value)
                    ? ""
                    : "none";

        });

    });

}

// ===============================
// Greeting Message
// ===============================
const title = document.querySelector(".page-title h1");

const hour = new Date().getHours();

if (title) {

    if (hour < 12) {

        title.innerHTML = "🌞 Good Morning, Admin";

    } else if (hour < 17) {

        title.innerHTML = "☀ Good Afternoon, Admin";

    } else {

        title.innerHTML = "🌙 Good Evening, Admin";

    }

}

// ===============================
// Live Clock
// ===============================
const clock = document.createElement("div");

clock.id = "liveClock";

clock.style.fontWeight = "600";
clock.style.marginRight = "15px";

const topIcons = document.querySelector(".top-icons");

if (topIcons) {
    topIcons.prepend(clock);
}

function updateClock() {

    const now = new Date();

    clock.innerHTML = now.toLocaleString();

}

updateClock();

setInterval(updateClock, 1000);