interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ben",
  lastName: "Sibanda",
  age: 25,
  location: "Harare",
};

const student2: Student = {
  firstName: "nqoe",
  lastName: "ncube",
  age: 26,
  location: "Bulawayo",
};

const  StudentsList: Student[] = [student1, student2];

const table = document.createElement("table");
table.style.border = "1px solid black";

StudentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid black";
  firstNameCell.style.padding = "5px";

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "5px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);

const studentsList: Student[] = [student1, student2];
