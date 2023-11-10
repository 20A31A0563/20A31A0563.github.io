var button = document.getElementById("loginbutton")
button.onclick = function () {
    if (localStorage.getItem("login") === null) {
        var mailid = document.getElementById("email").value;
        var pass = document.getElementById("password").value;
        var userdata = localStorage.getItem("userdetails");
        if (mailid && pass) {
            if (userdata) {
                userdetails = JSON.parse(userdata);
                if (mailid === userdetails.email && pass === userdetails.pass) {
                    window.open("todo.html", "_blank");
                    localStorage.setItem("login", true);
                }
                else {
                    alert("please enter valid details");
                }
            }

        }
        else {
            alert("please enter email and password");
        }
    }
    else {
        alert("you are already logged in");
    }
}
