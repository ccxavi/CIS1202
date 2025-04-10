function fetchGrades(){
    fetch("students.json")
        .then(response => {
            if (!response.ok){
                throw new Error("Failed to load user data");
            }
            return response.json();
        })
        .then(student => displayStudentGrades(student))
        .catch(error => console.error("Error fetching users:" , error))
}

function displayStudentGrades(students) {
    const tableBody = document.getElementById("students-tableBody");
    tableBody.innerHTML = '';

    students.forEach((student) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.grade}</td>
        `;

        tableBody.appendChild(row);
    });
};