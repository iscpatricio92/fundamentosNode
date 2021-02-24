//funciones
async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('hola,' + nombre);
            resolve(nombre);
        }, 1000);
    })

}

async function hablar(nombre) {
    return new Promise((res, rej) => {
        setTimeout(function () {
            console.log('bla bla bla bla...');
            res(nombre);
        }, 1000);
    })

}

async function adios(nombre) {
    return new Promise((res, rej) => {
        setTimeout(function () {
            console.log('adios', nombre);
            res(nombre);
        }, 1000);
    })

}

async function main(){
    const nombre = await hola('PAt')
    await hablar(nombre)
    await hablar(nombre)
    await hablar(nombre)
    await adios(nombre)
}

console.log('iniciando proceso...')
main();
console.log('Terminado proceso ')
