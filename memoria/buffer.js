let buffer = Buffer.alloc(6);
console.log(buffer);

let buffer2 = Buffer.from([1,2,3]);
console.log(buffer2);

let buffer3 = Buffer.from('Hola');
console.log(buffer3);
console.log(buffer3.toString());

let abc =  Buffer.alloc(26);
console.log(abc);

for (let i = 0; i< abc.length; i++){
  abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString())