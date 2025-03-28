function MedsTracker(checkTime) {
    const medications = [
        { 
            name: "Aspirin", 
            dosage: "100mg", 
            frequency: "08:00" 
        },
        { 
            name: "Metformin", 
            dosage: "500mg", 
            frequency: "12:00" 
        },
        { 
            name: "Lisinopril", 
            dosage: "10mg", 
            frequency: "18:00" 
        },
        { 
            name: "Atorvastatin", 
            dosage: "20mg", 
            frequency: "21:00" },
        { 
            name: "Omeprazole", 
            dosage: "40mg", 
            frequency: "07:00" 
        }
    ];

    function checkMedication() {
        const currentTime = checkTime || new Date().getHours().toString().padStart(2, '0') + ":" + new Date().getMinutes().toString().padStart(2, '0');

        medications.forEach(med => {
            if (med.frequency === currentTime) {
                console.log(`Time to take your medication: ${med.name} - ${med.dosage}`);
            }
        });
    }

    checkMedication();
}

MedsTracker("12:00");