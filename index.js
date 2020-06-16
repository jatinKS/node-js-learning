const Logger = require('./logger.js');

logger = new Logger();
logger.on('message',(data) => console.log("Logging: ",data));

logger.log('hello');
logger.log('hi');