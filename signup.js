document.getElementById("signup-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const pw = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, pw)
        .then((userCredential) => {
            alert("회원가입 성공!");
            window.location.href = "login.html";
        })
        .catch((error) => {
            alert("회원가입 실패: " + error.message);
        });
});
