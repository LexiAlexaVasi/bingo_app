function checkAuth() {
    if (!localStorage.getItem("loggedUser")) {
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "login.html";
}
