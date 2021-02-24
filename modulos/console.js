/*
Con console podemos imprimir todo tipo de valores por
nuestra terminal.

console.table: muestra una tabla a partir de un objeto.

console.countReset: reinicia el contador a 0.
console.time: inicia un cronometro en ms.
console.timeEnd: Finaliza el cronometro.

console.groupEnd: finaliza la agrupación.
console.clear: Limpia la consola.

*/



console.log('Algo') // recibe cualquier tipo y lo muestra en el consola.
console.info('Algo info') //es equivalente a log pero es usado para informar.
console.error('Algo error')  // es equivalente a log pero es usado para errores.
console.warn('Algo warn')   // es equivalente a log pero es usado para warning.

var tabla=[{a:1,b:'X'},{a:2,b:'V'}]
console.log(tabla);
console.table(tabla)   // muestra una tabla a partir de un objeto.

console.group('conver')
console.log('Hola 1');
console.group('bla')
console.log('Bla bla bla 2');
console.log('Bla bla bla 3');
console.groupEnd('bla')
console.log('Adios 3');
console.groupEnd('conver') // permite agrupar errores mediante identación.
console.log('fuera del group');


//console.count: inicia un contador autoincremental.
console.count('Veces') // Veces: 1
console.count('Veces') // Veces: 2
console.count('Veces') // Veces: 3
console.count('Veces') // Veces: 4
console.count('Veces') // Veces: 5