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

    courses.forEach((course) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${course.course_id}</td>
            <td>${course.course_name}</td>
            <td>${course.schedule}</td>
        `;

        tableBody.appendChild(row);
    });
};