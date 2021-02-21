// const EventEmitter = require('events')
// const emitter = new EventEmitter();
const Logger = require('./logger');
const logger = new Logger();




// const emitter = new EventEmitter();



// console.log(`Total Memory: ${totalMemory}`)
// console.log(`Free Memory: ${freeMemory}`)

//Logger class extends EventEmitter module so we have listener available on the logger object


logger.on('Memory Count', (arg) => {
    console.log('Memory Count:', arg)

})


    

//We are using log method defined our class - our exception is raised when it is called
logger.log('MESSAGE!')