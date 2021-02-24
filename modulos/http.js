const http = require('http')
const port= 3000;
http.createServer((req, res) => {
    console.log(req.url);
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    switch (req.url) {
        case '/':
            res.end('<h1>Hola PAt</h1>')
            break;
        default:
            res.write('404 ! no existe la url')
            res.end()
    }
}) .listen(port, (err)=>{
    if(err){
        console.info('no se puede establecer conexión con el servidor')
        console.error(err.message);
    }
})
console.info('Listen 3000');