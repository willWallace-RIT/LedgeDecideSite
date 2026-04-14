import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function submitEvent() {
  const raw = document.getElementById("eventInput").value;

  try {
    const data = JSON.parse(raw);

    const docRef = await addDoc(collection(db, "events"), {
      ...data,
      timestamp: new Date().toISOString()
    });

    document.getElementById("output").innerText =
      "Submitted: " + docRef.id;

  } catch (e) {
    document.getElementById("output").innerText =
      "Error: " + e.message;
  }
}

window.submitEvent = submitEvent;
