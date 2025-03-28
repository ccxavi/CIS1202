const patients = [
    {
        name: "LeBron James",
        height: 2.06,
        weight: 113,
    },
    {
        name: "Kevin Durant",
        height: 2.11,
        weight: 109,
    },
    {
        name: "Anthony Davis",
        height: 2.08,
        weight: 115,
    },
    {
        name: "Stephen Curry",
        height: 1.88,
        weight: 84,
    },
    {
        name: "Kyrie Irving",
        height: 1.88,
        weight: 88,
    }
];

function CompBMI(height, weight){
    return weight / (height ** 2);
}

function bmiCategory(BMI){

    let category;

    if(BMI < 18.5){
        category = "Underweight";
    } else if(BMI <= 24.9){
        category = "Normal";
    } else if(BMI <= 29.9){
        category = "Overweight";
    } else if(BMI <= 39.9){
        category = "Obesity";
    } else {
        category = "Extreme Obesity";
    }

    return category;
}

const patient = patients[4];
const patientBMI = CompBMI(patient.height, patient.weight);
const patientCategory = bmiCategory(patientBMI)

console.log(`Patient: ${patient.name}`);
console.log(`BMI: ${patientBMI}`);
console.log(`Category: ${patientCategory}`);


