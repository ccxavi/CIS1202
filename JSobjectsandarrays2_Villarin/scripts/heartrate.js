document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("heart_rate_form");
    const HHR = [];
    const LHR = [];
    const NHR = [];
    const patients = [];

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("patient_name").value;
        const age = parseInt(document.getElementById("age").value);
        const heartRate = parseInt(document.getElementById("heart_rate").value);

        if (!name || isNaN(age) || isNaN(heartRate)) {
            alert("Please enter valid patient information.");
            return;
        }

        const patient = { name, age, heartRate };
        patients.push(patient);

        if (heartRate > 220) {
            HHR.push(patient);
        } else if (heartRate < 150) {
            LHR.push(patient);
        } else {
            NHR.push(patient);
        }

        displayResults();
        form.reset();
    });

    function displayResults() {
        console.clear();
        console.log("High Heart Rates:", HHR);
        console.log("Low Heart Rates:", LHR);
        console.log("Normal Heart Rates:", NHR);
    }
});
