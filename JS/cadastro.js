var storage = window.localStorage;

var cadastro = [];

$(document).ready(function(){

    getForm();

});


function getForm(){

    $(".buttonRegister").click(function(){

        var nome = $("#cNomeCompleto").val();
        var email = $("#cEmail").val();
        var endereco = $("#cEndereco").val();
        var cep = $("#cCep").val();
        var senha = $("#cSenha").val();
        var confSenha = $("#cConfirmarSenha").val();

        if(nome == ""){
             alertify.error('Preencher todos os campos!');
        } else if(email == ""){
             alertify.error('Preencher todos os campos!');
        } else if(endereco == ""){
             alertify.error('Preencher todos os campos!');
        } else if(cep == ""){
             alertify.error('Preencher todos os campos!');
        } else if(senha == ""){
             alertify.error('Preencher todos os campos!');
        } else if(confSenha == ""){
             alertify.error('Preencher todos os campos!');
        } else {
            if(senha == confSenha){            
                var aux = [];
                aux.push(nome);
                aux.push(email);
                aux.push(endereco);
                aux.push(cep);
                aux.push(senha);

                cadastro.push(aux);
    
                storage.setItem('cadastro', JSON.stringify(cadastro));
    
                alertify.success('Usuário cadastrado!');

                $("#cNomeCompleto").val("");
                $("#cEmail").val("");
                $("#cEndereco").val("");
                $("#cCep").val("");
                $("#cSenha").val("");
                $("#cConfirmarSenha").val("");

            
            } else {
                alertify.error('As senha não se conferem!');
            }
        }
    });
}