
var regbutton = document.getElementById("Registerbtn");
regbutton.onclick = function () {

    var mail = document.getElementById("email").value;
    console.log(mail);
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    if (mail === "") {
        alert("Mail should not be empty");
    }
    else if (name === "") {
        alert("name should not be empty");
    }
    else if (password === "") {
        alert("password should not be empty")
    }

    else if (password.length < 8) {
        alert("password should be 8 characters atleast");
    }
   
    else {
        let userdetails = { email: mail, username: name, pass: password };
        localStorage.setItem("userdetails", JSON.stringify(userdetails));
        localStorage.setItem("login", true);
        localStorage.removeItem("todos");
        window.open("signup.html","_blank");
        
    }
}
