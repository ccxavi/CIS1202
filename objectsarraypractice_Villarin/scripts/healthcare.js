const patients = [
    {
        name: "Czach",
        age: 19,
        diagnosis: "Toothache",
        medications: [
            "Ponstan SF", 
            "Biogesic"
        ],
    },
    {
        name: "Jennie Kim",
        age: 29,
        diagnosis: "Toothache",
        medications: [
            "Ponstan SF",
            "Bioflu"
        ],
    },
    {
        name: "Lisa Manoban",
        age: 25,
        diagnosis: "Cold",
        medications: "Ceterizine",
    },
    {
        name: "Kim Jisoo",
        age: 27,
        diagnosis: "Acid reflux",
        medications: "Gaviscon"
    },
    {
        name: "Park Chaeyoung",
        age: 23,
        diagnosis: "Allergy",
        medications: "Epinephrine",
    },
];

function filterPatientsByDiagnosis(diagnosis) {
    const filteredPatients = patients.filter(
      (patient) => patient.diagnosis.toLowerCase() === diagnosis.toLowerCase()
    );
  
    if (filteredPatients.length < 1) {
      console.log("No patient with diagnosis: " + diagnosis);
    } else {
      console.log("Patients with diagnosis: " + diagnosis);
      filteredPatients.forEach((patient) => {
        console.log(
          "Name: " +
            patient.name +
            "\n" + 
            "Age: " +
            patient.age +
            "\n" +
            "Diagnosis: " +
            patient.diagnosis +
            "\n" +
            "Medications: " +
            patient.medications.join(", ")
        );
      });
    }
  }
  
  filterPatientsByDiagnosis("Toothache");