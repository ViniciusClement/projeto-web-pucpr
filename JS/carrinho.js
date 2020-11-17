var storage = window.localStorage;
var array = [];

$(document).ready(function(){
    getItem();

    console.log(array);

    excluir();
});

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
        conteudo +="</tr>";
        $('.table').append(conteudo);
    }

}

function recarregar(){
    location.reload();
}