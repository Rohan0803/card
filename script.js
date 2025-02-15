// Your Firebase configuration (from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyA1Xypdmf1IMcn_DHoVEyxPzCQUVtCn0Vk",
    authDomain: "ai-recognition-f2b0a.firebaseapp.com",
    projectId: "ai-recognition-f2b0a",
    storageBucket: "ai-recognition-f2b0a.firebasestorage.app",
    messagingSenderId: "136863613483",
    appId: "1:136863613483:web:b57407ababa5429b18a06e"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Fetch the message from Firestore
function fetchMessage() {
    db.collection("messages").doc("latest").get()
        .then((doc) => {
            if (doc.exists) {
                const message = doc.data().text;
                document.getElementById("message-text").innerText = message;
            } else {
                document.getElementById("message-text").innerText = "No message found.";
            }
        })
        .catch((error) => {
            console.error("Error fetching message: ", error);
            document.getElementById("message-text").innerText = "Failed to load message.";
        });
}

// Fetch the message when the page loads
window.onload = fetchMessage;