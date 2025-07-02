document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const pw = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, pw)
        .then(() => {
            alert("로그인 성공!");
            window.location.href = "map.html"; // 로그인 후 이동할 페이지
        })
        .catch((error) => {
            alert("로그인 실패: " + error.message);
        });
});
