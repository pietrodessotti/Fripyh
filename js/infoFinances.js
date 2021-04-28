var logado = false;

if (localStorage.getItem("acesso") == "true") {
    logado = true;

    document.getElementById("modalFinances").style.display = "none";

    console.log("entrou")
};

if (logado != true) {
    function closeInfo() {
        window.location.href = "./login.html"
    }

    function signUp() {
        window.location.href = "./newUser.html"
    }
}

function getOut() {
    localStorage.clear()
}