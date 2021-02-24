const { log } = require('console');
const fs = require('fs')

function leer(path, cb) {
    fs.readFile(path, (err, data) => {
        //Leido
        cb(data.toString());
    })
}

function escribir(path, contenido, cb) {
    fs.writeFile(path, contenido, function (err) {
        if (err) {
            console.error('No he podido escribir', err);
        }
        else {
            console.log('Se ha escrito correctamente...');
        }

    })
}

const borrar =(path, cb) =>{
    fs.unlink(path, cb)
}

//leer(__dirname + '/archivo.txt', console.log)

//escribir(__dirname+ '/archivo1.txt','Soy archivo nuevo', console.log)
borrar(__dirname + '/archivo1.txt',console.log)