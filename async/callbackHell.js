//funciones
function hola(nombre,miCallback){
    setTimeout(function(){
        console.log('hola,'+nombre);
        miCallback(nombre);
    },1000);
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('bla bla bla bla...');
        callbackHablar();
    },1000);
}

function adios(nombre,otroCallback) {
    setTimeout(function () {
        console.log('adios',nombre);
        otroCallback();
    },1000);
}


function conversacion(nombre, veces, callback){
    if(veces >= 0){
        hablar(function(){
            conversacion(nombre, --veces, callback)
        })
    }else{
        adios(nombre,callback)
    }
    
}
console.log("iniciando proceso");
/****************HELL**********************/
hola('PAt', function (nombre) {
    conversacion('nombre', 4, function(){
        console.log('Terminando proceso...');
    })
})
 /*hola('PAt', function (nombre) {
     hablar(function () {
        console.log('Bla bla bla bla...');
         hablar(function () {
             hablar(function () {
                 adios(nombre, function() {
                     console.log('Terminando proceso...');
                 });
             });
         });
     });
 });*/

