/*var http = require("http");  
http.createServer(function (request, response) {   
   response.writeHead(200, {'Content-Type': 'text/plain'});  
   response.end('Hello World\n');  
}).listen(8081);  
console.log('Server running at http://127.0.0.1:8081/'); 
var name = 'John';
console.warn(`warning ${name}`);
console.log(__dirname);   

const os=require('os');  
console.log("os.freemem(): \n",os.freemem());  
console.log("os.homedir(): \n",os.homedir());  
console.log("os.hostname(): \n",os.hostname());  
console.log("os.endianness(): \n",os.endianness());  
console.log("os.loadavg(): \n",os.loadavg());  
console.log("os.platform(): \n",os.platform());  
console.log("os.release(): \n",os.release());  
console.log("os.tmpdir(): \n",os.tmpdir());  
console.log("os.totalmem(): \n",os.totalmem());  
console.log("os.type(): \n",os.type());  
console.log("os.uptime(): \n",os.uptime());  

setInterval(function() {  
    console.log("setInterval: Hey! 1 millisecond completed!..");   
   }, 1000);  


var i =0;  
console.log(i);  
setInterval(function(){  
i++;  
console.log(i);  
}, 1000);   

setTimeout(function() {   
    console.log("setTimeout: Hey! 1000 millisecond completed!..");  
    }, 1000);  */

const net = require('net');  
var server = net.createServer((socket) => {  
  socket.end('goodbye\n');  
}).on('error', (err) => {  
  // handle errors here  
  throw err;  
});  
// grab a random port.  
server.listen(() => {  
  address = server.address();  
  console.log('opened server on %j', address);  
}); 