const { exec, spawn } = require('child_process');
//const exec = requite('child process').exec;

/*exec('node modulos/console.js',(err,stdout, sterr)=>{
    if(err){
        console.error('E',e);
        return false;
    }else{
        console.log(stdout);
    }

})*/

let process = spawn("ls", ["-la"]);
process.stdout.on("data", data => console.log(data.toString()));
process.on("exit", () =>
  console.log("process end; process.killed:", process.killed)
);