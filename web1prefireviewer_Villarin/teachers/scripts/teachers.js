function fetchTeachers(){
    fetch("teachers.json")
        .then(response => {
            if (!response.ok){
                throw new Error("Failed to load user data");
            }
            return response.json();
        })
        .then(teacher => displayTeachers(teacher))
        .catch(error => console.error("Error fetching users:" , error))
}

function displayTeachers(teachers) {
    const tableBody = document.getElementById("teachers-tableBody");
    tableBody.innerHTML = '';

    teachers.forEach((teacher) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${teacher.id}</td>
            <td>${teacher.name}</td>
            <td>${teacher.subject}</td>
        `;

        tableBody.appendChild(row);
    });
};