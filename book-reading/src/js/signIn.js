import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyDyKYMr5qn0g0lABuEYN-0alPzw-HAk9_g",
authDomain: "authweb-b710d.firebaseapp.com",
projectId: "authweb-b710d",
storageBucket: "authweb-b710d.appspot.com",
messagingSenderId: "954393792623",
appId: "1:954393792623:web:6366b1497d165f10edfd9a",
measurementId: "G-R2PMLML3FQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("Email");
const passwordInput = document.getElementById("Password");
const messageDiv = document.getElementById("message");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    if (!email || !password) {
alert("الرجاء ملء جميع الحقول.");
return;
}

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // تم تسجيل الدخول بنجاح
            const user = userCredential.user;
            alert("تم الدخول بنجاح!");
        })
        .catch((error) => {
            // حدث خطأ أثناء تسجيل الدخول
            const errorMessage = error.message;
            alert("حدث خطأ: " + errorMessage);
        });
});