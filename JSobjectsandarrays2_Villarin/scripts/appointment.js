document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("appointment_form");
    const regularAppointments = [];
    const urgentAppointments = [];
    const emergencyAppointments = [];
    const patients = [];

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("appointment_name").value;
        const date = document.getElementById("appointment_date").value;
        const time = document.getElementById("appointment_time").value;
        const priority = document.getElementById("status").value;

        if (!name || !date || !time || !priority) {
            alert("Please fill out all fields.");
            return;
        }

        const patient = { name, date, time, priority };
        patients.push(patient);

        if (priority === "emergency") {
            emergencyAppointments.push(patient);
        } else if (priority === "urgent") {
            urgentAppointments.push(patient);
        } else {
            regularAppointments.push(patient);
        }

        displayAppointments();
        form.reset();
    });

    function displayAppointments() {
        console.clear();
        console.log("Emergency Appointments:", emergencyAppointments);
        console.log("Urgent Appointments:", urgentAppointments);
        console.log("Regular Appointments:", regularAppointments);
    }
});
