var storage = window.localStorage;
var array = [];

$(document).ready(function(){
    getItem();

    console.log(array);
    excluir();
    pagar();
});

function pagar(){

    for(let x = 0; x < array.length; x++){

        $(`#btn2-${x}`).click(function(){

            var produto = array[x][0];

            storage.setItem('produto-pagar', JSON.stringify(produto));  

            window.location.assign("../PAGINAS/pagamento.html");
        
        });
    }
}

function excluir (){

    for(let x = 0; x < array.length; x++){

        $(`#btn-${x}`).click(function(){
    
            //Remove of LocalStorage
            var pos = x;

            array.splice(pos,1);

            console.log(array);
            // //Upgrate
            storage.setItem('item', JSON.stringify(array));

            getItem();
            
            alertify.error('Excluido');

            setInterval(recarregar, 700);
        });
    }
}

function getItem(){

    $('.tbody').html("");
    var conteudo = "";

    array = JSON.parse(storage.getItem('item'));
    
    for(var x = 0; x < array.length; x++){

        conteudo = "";
        conteudo +="<tr id='tr-" + x + "'>";
        conteudo +="<td>" + array[x][0] + "</td>";
        conteudo +="<td>" + array[x][1] +"</td>";
        conteudo +="<td>" + array[x][2] +"</td>";
        conteudo +="<td>";
        conteudo +="<button class='btn-excluir' id='btn-"+ x +"'>Excluir</button>";
        conteudo +="</td>";
        conteudo +="<td>";
        conteudo +="<button class='btn-pagamento' id='btn2-"+ x +"'>Pagamento</button>";
        conteudo +="</td>";
        conteudo +="</tr>";
        $('.table').append(conteudo);
    }

}

function recarregar(){
    location.reload();
}