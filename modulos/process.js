//const process = require('process')
process.on('beforeExit', () => {
    console.log('Antes de terminar');
});


process.on('uncaughtException', (error, origen) => console.log(error, origen));




console.log('esto no sale')

process.on('exit', () => {
    console.log('El proceso termino');
    setTimeout(() => {
        console.log('este mensaje es invisible');
    }, 500);
})

setTimeout(() => {
    console.log('este mensaje es totalmente visible');
}, 500);