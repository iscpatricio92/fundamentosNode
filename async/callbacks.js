function hola(nombre, micallback) {
    setTimeout(() => {
        console.log("Hola " + nombre);
        micallback();
    }, 2000)
}

function adios(nombre, otrocallBack) {
    setTimeout(() => {
        console.log('Adios ' + nombre);
        otrocallBack();
    }, 1000);
}
console.log("iniciando proceso");
hola('PAT', function () {
    adios('Patricio', function () {
        console.log("terminando proceso");
    });

});


//hola('Pat estás probando  "hola" las funciones independientemente, las pasas vacías', function () {});
//adios('Pat estás probando "adios" las funciones independientemente, las pasas vacías', function () {});
