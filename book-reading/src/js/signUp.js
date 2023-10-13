import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
const firebaseConfig = {
apiKey: "AIzaSyDyKYMr5qn0g0lABuEYN-0alPzw-HAk9_g",
authDomain: "authweb-b710d.firebaseapp.com",
projectId: "authweb-b710d",
storageBucket: "authweb-b710d.appspot.com",
messagingSenderId: "954393792623",
appId: "1:954393792623:web:6366b1497d165f10edfd9a",
measurementId: "G-R2PMLML3FQ"
};

// const app = initializeApp(firebaseConfig);
const auth = getAuth();

const signupForm = document.getElementById("signupForm");
const emailInput = document.getElementById("Email");
const passwordInput = document.getElementById("Password");
const signupButton = document.getElementById("signupButton");
const messageDiv = document.getElementById("message");

signupButton.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    if (!email || !password) {
alert("الرجاء ملء جميع الحقول.");
return;
}
    
    

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            alert("تم إنشاء الحساب بنجاح!");
            // messageDiv.innerHTML = "تم إنشاء الحساب بنجاح!";
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("حدث خطأ: " + errorMessage);
        });
});