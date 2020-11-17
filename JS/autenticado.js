var storage = window.localStorage;
var dadosUser = []

$(document).ready(function() {

    getDadosUser();   

});


function getDadosUser(){

    dadosUser = JSON.parse(storage.getItem('cadastro'));

        

}