import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBdDPXdLLIPaaKy-vMPuHcpCDpDtJdtBZk",
  authDomain: "steve-portfolio-827e8.firebaseapp.com",
  projectId: "steve-portfolio-827e8",
  storageBucket: "steve-portfolio-827e8.firebasestorage.app",
  messagingSenderId: "506268439770",
  appId: "1:506268439770:web:1ccb4d18ea7548a17f81e3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Smooth scroll
document.getElementById("aboutBtn").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
});

// Form submission
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  try {
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
      createdAt: new Date()
    });

    alert("✅ Message sent successfully!");
    this.reset();
  } catch (error) {
    console.error("Firebase Error:", error);
    alert("❌ Failed to send message.");
  }
});
