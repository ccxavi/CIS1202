const initialPatients = [
  { 
      name: "LeBron James", 
      status: "Urgent", 
  },
  { 
      name: "Kevin Durant", 
      status: "Regular", 
  },
  { 
      name: "Anthony Davis", 
      status: "Emergency", 
  },
  { 
      name: "Stephen Curry", 
      status: "Regular", 
  },
  { 
      name: "Kyrie Irving", 
      status: "Urgent", 
  }
];

class PatientQueue {
    constructor(patients = []) {
      this.queue = patients.slice(0, 5);
      this.sortQueue();
    }
  
    addPatient(patient) {
      if (this.queue.length < 5) {
        this.queue.push(patient);
        this.sortQueue();
      } else {
        console.log("Queue is full. Cannot add more patients.");
      }
    }
  
    viewQueue() {
      return this.queue;
    }
  
    removePatient() {
      if (this.queue.length > 0) {
        return this.queue.shift();
      } else {
        console.log("Queue is empty. No patient to remove.");
        return null;
      }
    }
  
    sortQueue() {
      const priorityOrder = { 
        "Emergency": 1, 
        "Urgent": 2, 
        "Regular": 3 
      };
      this.queue.sort((a, b) => priorityOrder[a.status] - priorityOrder[b.status]);
    }
  }
  
  
  const pq = new PatientQueue(initialPatients);
  console.log("Initial Queue:", pq.viewQueue());
  
  pq.addPatient(
    { 
      name: "Michael Jordan", 
      status: "Emergency" 
    }
  );
  
  console.log("Queue after attempting to add Michael Jordan:", pq.viewQueue());
  
  pq.removePatient();
  console.log("Queue after removing a patient:", pq.viewQueue());
  