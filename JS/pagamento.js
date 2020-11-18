var storage = window.localStorage;
var arrayUsuario = [];

$(document).ready(function(){

    verificaCampos();
    verificaUsuario();

});

function removerProduto(){
 
    //Pega o produto
    var produto = JSON.parse(storage.getItem('produto-pagar'));

    console.log(produto);

    var arrayProdutos = JSON.parse(storage.getItem('item'));

    console.log(arrayProdutos);

    for(let x = 0; x < arrayProdutos.length; x++){

        if(arrayProdutos[x][0] == produto){

            //Remove o produto do localStorage
            arrayProdutos.splice(x,1);

            //Atualiza o localStorage
            storage.setItem('item', JSON.stringify(arrayProdutos));   
            
            storage.removeItem('produto-pagar');
        }
    }
}

function verificaUsuario(){

    $(".finalizar").click(function(){

        var email = $("#email").val();
    
        arrayUsuario = JSON.parse(storage.getItem('cadastro'));

        for(let x = 0; x < arrayUsuario.length; x++){

            if(arrayUsuario[x][1] == email && arrayUsuario[x][5] == "conf"){
                
                alertify.success('Pagamento realizado!');

                $("#nome-completo").val("");
                $("#email").val("");
                $("#cpf").val("");
                $("#num-cartao").val("");
                $("#data-validade").val("");
                $("#cvv").val("");

                removerProduto();

            } else {
                alertify.error('Precisa fazer Login');  
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