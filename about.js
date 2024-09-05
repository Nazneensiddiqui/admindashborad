// Get elements from the DOM
const addEmployeeBtn = document.getElementById('addEmployeeBtn');
const employeeModal = document.getElementById('employeeModal');
const closeModalBtn = document.querySelector('.close');
const employeeForm = document.getElementById('employeeForm');
const employeeTable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];

// Function to show modal
addEmployeeBtn.addEventListener('click', () => {
    employeeModal.style.display = 'block';
});

// Function to close modal
closeModalBtn.addEventListener('click', () => {
    employeeModal.style.display = 'none';
});

// Function to add new employee
employeeForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const employeeId = document.getElementById('employeeId').value;
    const employeeName = document.getElementById('employeeName').value;
    const employeeDept = document.getElementById('employeeDept').value;
    const employeePos = document.getElementById('employeePos').value;
    const employeeEmail = document.getElementById('employeeEmail').value;
    const employeePhone = document.getElementById('employeePhone').value;
    const employeeStatus = document.getElementById('employeeStatus').value;

    const newRow = employeeTable.insertRow();

    newRow.innerHTML = `
        <td>${employeeId}</td>
        <td>${employeeName}</td>
        <td>${employeeDept}</td>
        <td>${employeePos}</td>
        <td>${employeeEmail}</td>
        <td>${employeePhone}</td>
        <td><span class="status ${employeeStatus}">${employeeStatus.charAt(0).toUpperCase() + employeeStatus.slice(1)}</span></td>
        <td class="actions"><button onclick="deleteRow(this)">Delete</button></td>
    `;

    employeeModal.style.display = 'none';
    employeeForm.reset();
});

// Function to delete a row
function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Close modal if clicked outside of modal content
window.onclick = function (event) {
    if (event.target == employeeModal) {
        employeeModal.style.display = "none";
    }
}