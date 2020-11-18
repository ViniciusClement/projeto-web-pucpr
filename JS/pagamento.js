var storage = window.localStorage;
var array = [];

$(document).ready(function(){

    verificaCampos();
    verificaUsuario();

});


function verificaUsuario(){

    $(".finalizar").click(function(){

        var email = $("#email").val();
    
        array = JSON.parse(storage.getItem('cadastro'));

        for(let x = 0; x < array.length; x++){

            if(array[x][1] == email && array[x][5] == "conf"){
                
                alertify.success('Pagamento realizado!');

                $("#nome-completo").val("");
                $("#email").val("");
                $("#cpf").val("");
                $("#num-cartao").val("");
                $("#data-validade").val("");
                $("#cvv").val("");

            } else {
                alertify.error('Precisa fazer Login para efetuar a compra');
            }
        }
    });
}

function verificaCampos(){

    $(".finalizar").click(function(){
    
        var nome = $("#nome-completo").val();
        var email = $("#email").val();
        var cpf = $("#cpf").val();
        var num_cart = $("#num-cartao").val();
        var data = $("#data-validade").val();
        var cvv =$("#cvv").val();

        if(nome == ""){
            alertify.error('Preencher todos os campos!');
        } else if(email == ""){
            alertify.error('Precisa fazer Login');
        } else if (cpf ==""){
            alertify.error('Precisa fazer Login');
        } else if(num_cart == ""){
            alertify.error('Precisa fazer Login');
        } else if(data == ""){
            alertify.error('Precisa fazer Login');
        } else if(cvv == "") {
            alertify.error('Precisa fazer Login');
        } 
    });
}