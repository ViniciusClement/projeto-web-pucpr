var itensAdd = [];
var storage = window.localStorage;

$(document).ready(function(){

    click();

});


function click(){

    for(let x = 1; x < 10; x++){
        $(`#btn-${x}`).click(function(){
            
            var titulo = document.getElementById(`h3-${x}`).getAttribute("value");
            var preco = document.getElementById(`h4-${x}`).getAttribute("value");
            var desc = document.getElementById(`p-${x}`).getAttribute("value");

            //console.log(titulo, preco, desc);

            var aux = []

            aux.push(titulo);
            aux.push(preco);
            aux.push(desc);

            itensAdd.push(aux);

            // // //Adicionando no local Storage
            storage.setItem('item', JSON.stringify(itensAdd));           
        
            var notification = alertify.notify('Adicionado', 'success', 2, function(){  console.log('dismissed'); });

        });
    }



}


