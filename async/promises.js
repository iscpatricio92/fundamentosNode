//funciones
function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('hola,' + nombre);
            resolve(nombre);
        }, 1000);
    })

}

function hablar(nombre) {
    return new Promise((res, rej) => {
        setTimeout(function () {
            console.log('bla bla bla bla...');
            res(nombre);
        }, 1000);
    })

}

function adios(nombre) {
    return new Promise((res, rej) => {
        setTimeout(function () {
            console.log('adios', nombre);
            res(nombre);
        }, 1000);
    })

}

console.log('iniciando proceso...')
hola('Patricio')
    .then(hablar)

    .then(adios)
    .then(nombre => console.log('Terminado proceso ' + nombre))
    //cualquier hilo de ejcucion lo llevará al catch para ejecutar su funcion
    .catch(error =>{
        console.error('HA habido un error')
        console.error(error)
    })
