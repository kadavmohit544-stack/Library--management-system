// =======================================
// Smart Library - Student Management
// =======================================

// Default Data
let students = JSON.parse(localStorage.getItem("students")) || [
    {
        id: 1,
        name: "Rahul Sharma",
        roll: "CO24001",
        department: "Computer",
        year: "Second Year",
        mobile: "9876543210",
        photo: "images/students/default.png",
        status: "Active"
    },
    {
        id: 2,
        name: "Priya Patel",
        roll: "CO24002",
        department: "Computer",
        year: "Second Year",
        mobile: "9876501234",
        photo: "images/students/default.png",
        status: "Active"
    }
];

// Elements
const table = document.getElementById("studentTable");
const modal = document.getElementById("studentModal");
const form = document.getElementById("studentForm");
const addBtn = document.getElementById("addStudentBtn");
const closeBtn = document.querySelector(".close");
const modalTitle = document.getElementById("modalTitle");

let editIndex = -1;

// Save Data
function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
}

// Render Table
function renderStudents() {

    table.innerHTML = "";

    students.forEach((student, index) => {

        const badge = student.status === "Active"
            ? '<span class="active">Active</span>'
            : '<span class="inactive">Inactive</span>';

        table.innerHTML += `
        <tr>

            <td>${student.id}</td>

            <td>
                <img src="${student.photo}"
                     onerror="this.src='images/students/default.png'">
            </td>

            <td>${student.name}</td>

            <td>${student.roll}</td>

            <td>${student.department}</td>

            <td>${student.year}</td>

            <td>${student.mobile}</td>

            <td>${badge}</td>

            <td>

                <button class="action-btn edit-btn"
                    onclick="editStudent(${index})">

                    <i class="fas fa-edit"></i>

                </button>

                <button class="action-btn delete-btn"
                    onclick="deleteStudent(${index})">

                    <i class="fas fa-trash"></i>

                </button>

            </td>

        </tr>
        `;
    });

    localStorage.setItem("totalStudents", students.length);
}

renderStudents();

// Open Modal
addBtn.onclick = () => {

    editIndex = -1;

    form.reset();

    modalTitle.innerHTML = "Add Student";

    modal.style.display = "flex";
};

// Close Modal
closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

// Add / Update Student
form.addEventListener("submit", (e) => {

    e.preventDefault();

    const student = {

        id: editIndex === -1
            ? Date.now()
            : students[editIndex].id,

        name: document.getElementById("studentName").value,

        roll: document.getElementById("rollNo").value,

        department: document.getElementById("department").value,

        year: document.getElementById("year").value,

        mobile: document.getElementById("mobile").value,

        photo:
            document.getElementById("photo").value ||
            "images/students/default.png",

        status: "Active"

    };

    if (editIndex === -1) {

        students.push(student);

    } else {

        students[editIndex] = student;

    }

    saveStudents();

    renderStudents();

    modal.style.display = "none";

});
// =======================================
// Edit Student
// =======================================

function editStudent(index){

    editIndex = index;

    const student = students[index];

    document.getElementById("studentId").value = student.id;
    document.getElementById("studentName").value = student.name;
    document.getElementById("rollNo").value = student.roll;
    document.getElementById("department").value = student.department;
    document.getElementById("year").value = student.year;
    document.getElementById("mobile").value = student.mobile;
    document.getElementById("photo").value = student.photo;

    modalTitle.innerHTML = "Edit Student";

    modal.style.display = "flex";
}


// =======================================
// Delete Student
// =======================================

function deleteStudent(index){

    const confirmDelete = confirm(
        `Delete "${students[index].name}" ?`
    );

    if(!confirmDelete) return;

    students.splice(index,1);

    saveStudents();

    renderStudents();

    showToast("Student Deleted Successfully");

}


// =======================================
// Search Student
// =======================================

const searchStudent = document.getElementById("searchStudent");

searchStudent.addEventListener("keyup", filterStudents);


// =======================================
// Department Filter
// =======================================

const departmentFilter = document.getElementById("departmentFilter");

departmentFilter.addEventListener("change", filterStudents);


// =======================================
// Filter Function
// =======================================

function filterStudents(){

    const search = searchStudent.value.toLowerCase();

    const department = departmentFilter.value;

    table.innerHTML = "";

    students.forEach((student,index)=>{

        const matchSearch =

        student.name.toLowerCase().includes(search)

        ||

        student.roll.toLowerCase().includes(search);

        const matchDepartment =

        department==="All"

        ||

        student.department===department;

        if(matchSearch && matchDepartment){

            const badge =

            student.status==="Active"

            ?

            '<span class="active">Active</span>'

            :

            '<span class="inactive">Inactive</span>';

            table.innerHTML += `

            <tr>

            <td>${student.id}</td>

            <td>

            <img src="${student.photo}"

            onerror="this.src='images/students/default.png'">

            </td>

            <td>${student.name}</td>

            <td>${student.roll}</td>

            <td>${student.department}</td>

            <td>${student.year}</td>

            <td>${student.mobile}</td>

            <td>${badge}</td>

            <td>

            <button
            class="action-btn edit-btn"
            onclick="editStudent(${index})">

            <i class="fas fa-edit"></i>

            </button>

            <button
            class="action-btn delete-btn"
            onclick="deleteStudent(${index})">

            <i class="fas fa-trash"></i>

            </button>

            </td>

            </tr>

            `;

        }

    });

}


// =======================================
// Toast Notification
// =======================================

function showToast(message){

    const toast = document.createElement("div");

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


// =======================================
// Export Students
// =======================================

function exportStudents(){

    const data = JSON.stringify(students,null,4);

    const blob = new Blob([data],{

        type:"application/json"

    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href=url;

    a.download="students.json";

    a.click();

    URL.revokeObjectURL(url);

    showToast("Students Exported");

}


// =======================================
// Print Students
// =======================================

function printStudents(){

    window.print();

}