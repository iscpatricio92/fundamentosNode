const fs = require('fs')
const stream = require('stream')
const util = require('util')
let readableStream = fs.createReadStream(__dirname + '/input.txt')
/*let data = ''

readableStream.setEncoding('UTF8')
readableStream.on('data',(chunk)=>{console.log(chunk)})

readableStream.on('end',()=>console.log(data))

process.stdout.write('hola')
process.stdout.write('que ')
process.stdout.write('tal')*/

// BUFFER DE TRANSFORMACION
const Transform = stream.Transform;

function Mayus() {
  Transform.call(this)
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
  this.push(chunk.toString().toUpperCase())
  cb();
}
let mayus = new Mayus();

readableStream
.pipe(mayus)
.pipe(process.stdout)
