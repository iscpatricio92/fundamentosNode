let suma = 0
let suma2 = 0
console.time('bucle')
for (let i = 0; i < 100000000; i++) {
    suma += 1;
}
console.timeEnd('bucle');

console.time('bucle2')
for (let j = 0; j < 100000000; j++) {
    suma2 += 1;
}
console.timeEnd('bucle2');

console.time('asincrono');
Asinc()
.then(()=>{
    console.timeEnd('asincrono');
})

function Asinc() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('proceso asincrono');
            resolve()
        }, 2000);
    })
}
