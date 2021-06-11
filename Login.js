function controle(){
    var nome = cadastro.nome.value;
    var nome2 = cadastro.nome2.value;
    var email2 = cadastro.email2.value;
    var senha = cadastro.senha.value;
    var senha2 = cadastro.senha2.value;
    if(nome==""){
        alert("Campo nome é obrigatorio");
        cadastro.nome.focus();
        return false;
    }
    if(nome2==""){
        alert("Campo sobrenome é obrigatorio");
        cadastro.nome2.focus();
        return false;
    }
    if(email2==""){
        alert("Campo Email é obrigatorio");
        cadastro.email2.focus();
        return false;
    }
    if(senha==""){
        alert("Campo Senha é obrigatorio");
        cadastro.senha.focus();
        return false;
    }
    if(isNaN(senha)){
        alert("A senha pode conter somente numeros!");
        cadastro.senha.focus();
        return false;    
    }
    if(senha.length<8 || senha.length >12){
        alert("A senha deve conter no mínimo 8 e no máximo 12 caractéres!");
        cadastro.senha.focus();
        return false;
    }
    if(senha2 != senha){
        alert("As senhas indeferiram uma da outra!");
        cadastro.senha2.focus();
        return false;
    }
    if(senha2==""){
        alert("Necessário confirmar a senha");
        cadastro.senha2.focus();
        return false;
    }

}