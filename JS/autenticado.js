var storage = window.localStorage;
var dadosUser = []

$(document).ready(function() {

    getDadosUser();   

});


function getDadosUser(){

    dadosUser = JSON.parse(storage.getItem('cadastro'));

    for(let x = 0; x < dadosUser.length; x++){

        if(dadosUser[x][5] == "conf"){
            var nomeUser = dadosUser[x][0];
    
           $("#h-1").append(`Seja Bem-Vindo ${nomeUser}`);
        } 
    }
    
}