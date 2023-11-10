// JavaScript source code
var logoutbutton = document.getElementById("logout");
logoutbutton.onclick = function () {
    localStorage.removeItem("login");
    window.location.href = "index.html";
}
