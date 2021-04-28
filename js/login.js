function logInto() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    console.log(email.value + password.value)

    if (email.value == "admin" && password.value == "admin") {
        localStorage.setItem("acesso", true);

        window.location.href = "../index.html";

        document.getElementById("btnHeader").style.display = "flex";

    } else if (email.value === "" && password.value === "") {
        alert("Você precisa digitar seu e-mail e senha")
    } else if (email.value == "") {
        alert("Por favor, digite seu e-mail")

    } else if (password.value == "") {
        alert("Por favor, digite sua senha")
    } else {
        alert("Usuário ou senha inválidos!")

        password.value = "";
    }
}