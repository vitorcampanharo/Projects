function enviar() {
    let user = document.getElementById("user")
    if (user.value.length == 0) {
        alert("Precisamos de um E-mail de recuperação")
    }else{
        userValue = user.value
        alert("Pronto, enviarémos um link neste e-mail para redefinição de senha")
        window.location.replace("../html/home.html")
    }
}