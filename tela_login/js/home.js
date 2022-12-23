function login() {
    let user = document.getElementById("user")
    let password = document.getElementById("password")
    if (user.value.length == 0 || password.value.length == 0) {
        alert ("Um ou mais campos estão vazios")
    } else{
        let userValue = user.value
        let passwordValue = password.value
        if (userValue == "admin@email.com" && passwordValue == "123456") {
            alert ("Acesso consedido, seja bem vindo")
            user.value = null
            password.value = null
        } else{
            alert("Usuário ou senha incorretos")
            user.value = null
            password.value = null
        }
    }
}
function criar() {
    window.location.replace("../html/criar_conta.html")  //Serve para redirecionar a página para outro arquivo html desejado, uma espécie de link
}
function esqueceu() {
    window.location.replace("../html/esqueceu_senha.html")
}
