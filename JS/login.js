var storage = window.localStorage;

$(document).ready(function(){

    verificaUsuario();
    
});

function verificaUsuario(){

    $("#bEnter").click(function(){

        var email = $("#cEmail").val();
        var senha = $("#cSenha").val();

        var usuarios = [];

        usuarios = JSON.parse(storage.getItem('cadastro'));

        for(let x = 0; x < usuarios.length; x++){
            
            if(usuarios[x][1] == email && usuarios[x][4] == senha) {
                alert("Usuário identificado!");
                
            } else {
                alert("E-mail ou senha inválidos!");
               
                $("#cEmail").val("");
                $("#cSenha").val("");
            }
        }

    });
}