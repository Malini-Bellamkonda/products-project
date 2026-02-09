document.getElementById("formContainer").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedData = JSON.parse(localStorage.getItem("userData"));

    if(storedData && storedData.email == email && storedData.password == password){
        alert("Login Successful");
        window.location.href = "HOME.html"; // Redirect to home page
    } else {
        alert("Enter a valid Credential!!!");
    }
});

