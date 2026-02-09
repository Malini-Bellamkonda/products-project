document.getElementById("formContainer").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;

    let errorMail = document.getElementById("errorMail");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)){
        errorMail.textContent = "Invalid Email..."
        return;
    }

    let errorPwd = document.getElementById("errorPwd");
    let passwordPattern = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}$/;
    if(!passwordPattern.test(password)){
        errorPwd.textContent = "Password is not matching with the pattern";
        return;
    }

    let userData = {
        name: name,
        email: email,
        password: password,
        mobile: mobile
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Registration Successful!");
    window.location.href = "Login.html"; // Redirect to login page
});

