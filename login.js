const users = [
    { username: "Admin_Killah", password: "Emanuel_Killah_5032" },
    { username: "Admin_Lexi", password: "Lilith_Tigrut_2027" }
];

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");

    const found = users.find(u => u.username === user && u.password === pass);

    if (found) {
        // salvăm userul logat
        localStorage.setItem("loggedUser", user);
        window.location.href = "liste.html";
    } else {
        error.textContent = "User sau parolă greșită!";
    }
}
