function fetchCourses(){
    fetch("courses.json")
        .then(response => {
            if (!response.ok){
                throw new Error("Failed to load user data");
            }
            return response.json();
        })
        .then(course => displayCourses(course))
        .catch(error => console.error("Error fetching users:" , error))
}

function displayCourses(courses) {
    const tableBody = document.getElementById("courses-tableBody");
    tableBody.innerHTML = '';

    courses.forEach((course, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td>${course.schedule["time"]}</td>
        `;

        tableBody.appendChild(row);
    });
};