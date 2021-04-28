function register() {
    var newName = document.getElementById("newName");
    var newUser = document.getElementById("newUser");
    var newEmail = document.getElementById("newEmail");
    var confirmEmail = document.getElementById("confirmEmail")
    var newPassword = document.getElementById("newPassword");

    var data = JSON.parse(localStorage.getItem("dataNewUser"));

    if (data == null) {
        localStorage.setItem("dataNewUser", "[]");
        data = [];
    }

    var newRegister = {
        name: newName.value,
        user: newUser.value,
        email: newEmail.value,
        confirmEmail: confirmEmail.value,
        newPassword: newPassword.value,
    }

    if (newName.value == "" || newUser.value == "" || newEmail.value == "" || confirmEmail.value == "" || newPassword.value == "") {
        alert("Por favor, preencha todos os campos!")

    } else if (newEmail.value != confirmEmail.value) {
        alert("Os e-mails devem ser iguais!")
        
    } else {
        data.push(newRegister);

        localStorage.setItem("dataNewUser", JSON.stringify(data));
        alert("Registro concluído");

        newName.value = "";
        newUser.value = "";
        newEmail.value = "";
        confirmEmail.value = "";
        newPassword.value = "";
    }
}