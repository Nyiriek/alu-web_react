interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = { firstName: "Angela", lastName: "Simon", age: 20, location: "Nairobi" };
const student2: Student = { firstName: "Pierre", lastName: "Simeons", age: 19, location: "Kigali" };
const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement('table');

// Create and append the table header
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = ['First Name', 'Last Name', 'Age', 'Location'];
  
headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
});
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
// Create and append the table body
const tbody = document.createElement('tbody');
studentsList.forEach(student => {
    const row = document.createElement('tr');
    row.insertCell().textContent = student.firstName;
    row.insertCell().textContent = student.lastName;
    row.insertCell().textContent = student.age.toString(); // Convert age to string for textContent
    row.insertCell().textContent = student.location;
    tbody.appendChild(row);
});

table.appendChild(tbody);

// Append the table to the document body
document.body.appendChild(table);