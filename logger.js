const EventEmitter = require('events')
// const emitter = new EventEmitter();
const os = require('os')

let totalMemory = os.totalmem();
let freeMemory = os.freemem();
let runTime = os.uptime();
let userInfo = os.userInfo();
let platform = os.platform();
let version = os.version();
let temp = os.tmpdir();
let network = os.networkInterfaces()

//By extending EventEmitter our logger objects have access to listeners, and allows us to raise exceptions within our methods instead of App.js
class Logger extends EventEmitter{

log(message) {
        console.log("Logged:", message)
        this.emit('Memory Count', {OS: platform, version: version, totalMem: totalMemory, freeMem: freeMemory, Runtime: runTime, Temp: temp, Network: network.eth0, LocalNet: network.lo, User: userInfo})
        // this.emit('Logging', {data: 'MESSAGE!'})
    }
    
    
}




module.exports = Logger;