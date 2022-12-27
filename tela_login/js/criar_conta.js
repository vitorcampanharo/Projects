function cadastrar() {
    let user = document.getElementById("user")
    let password1 = document.getElementById("password1")
    let password2 = document.getElementById("password2")
    if (user.value.length == 0 || password1.value.length == 0 || password2.value.length == 0) {
        alert ("Um ou mais campos estão vazios ainda")
    } else{
        let password1Value = password1.value
        let password2Value = password2.value
        if (password1Value == password2Value) {
            alert ("Parabens, conta criada com sucesso")
            window.location.replace("../html/home.html") //Serve para redirecionar a página para outro arquivo html desejado, uma espécie de link
        } else{
            alert ("As senhas não são iguais")
            password1.value = null
            password2.value = null
        }
    }
}