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
                
                var log = "conf";
                var aux = [];

                usuarios[x].push(log);

                aux.push(usuarios[x]);

                alertify.success('Usuário identificado!');

                console.log(aux);

                storage.setItem('cadastro', JSON.stringify(aux));

                window.location.assign("../PAGINAS/autenticado.html");

            } else {
                alertify.success('Usuário ou senha inválido!');

                $("#cEmail").val("");
                $("#cSenha").val("");
            }
        }

    });
}