function register() {
    var newName = document.getElementById("newName");
    var newUser = document.getElementById("newUser");
    var newEmail = document.getElementById("newEmail");
    var confirmEmail = document.getElementById("confirmEmail")
    var newPassword = document.getElementById("newPassword");

    if(newEmail != confirmEmail) {
        alert("Os emails são diferentes")
    } else {

    }

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

    data.push(newRegister);

    localStorage.setItem("dataNewUser", JSON.stringify(data));
    alert("Registro concluído");

    newName.value = "";
    newUser.value = "";
    newEmail.value = "";
    confirmEmail.value = "";
    newPassword.value = "";
}

