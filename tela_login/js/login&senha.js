let usuarios = [];
usuarios.push({ user: "vitor", password: "123" });
console.log(usuarios);

function login() {
    let user = document.getElementById("user");
    let password = document.getElementById("password");

    if (!user.value || !password.value) {
        alert("Um ou mais campos estão vazios");
    } else {
        let userValue = user.value.trim();
        let passwordValue = password.value.trim();

        console.log("Valores durante o login - Usuário:", userValue, "Senha:", passwordValue);

        // Verifica se o usuário e a senha correspondem a algum registro (ignorando maiúsculas/minúsculas)
        let usuarioEncontrado = usuarios.find(
            (usuario) =>
                usuario.user.toLowerCase() === userValue.toLowerCase() &&
                usuario.password === passwordValue
        );

        if (usuarioEncontrado) {
            alert("Acesso concedido, seja bem-vindo");
            user.value = "";
            password.value = "";
        } else {
            alert("Usuário ou senha incorretos");
            user.value = "";
            password.value = "";
        }
    }
}

function cadastrar() {
    let user = document.getElementById("userC");
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");

    console.log("Valores capturados: Usuário:", user.value, "Senha1:", password1.value, "Senha2:", password2.value);
    
    if (!user.value || !password1.value || !password2.value) {
        alert("Um ou mais campos estão vazios ainda");
    } else {
        let password1Value = password1.value;
        let password2Value = password2.value;
        
        if (password1Value === password2Value) {
            // Cria um objeto representando o novo usuário
            let novoUsuario = {
                user: user.value,
                password: password1Value,
            };
            
            // Adiciona o novo usuário ao array de usuários
            usuarios.push(novoUsuario);
            console.log(usuarios);
            
            alert("Parabéns, conta criada com sucesso");
            window.location.replace("../html/home.html");
            user.value = "";
            password1.value = "";
            password2.value = "";
        } else {
            alert("As senhas não são iguais");
            password1.value = "";
            password2.value = "";
        }
    }
}

function criar() {
    window.location.replace("../html/criar_conta.html")  //Serve para redirecionar a página para outro arquivo html desejado, uma espécie de link
}
function esqueceu() {
    window.location.replace("../html/esqueceu_senha.html")
}
