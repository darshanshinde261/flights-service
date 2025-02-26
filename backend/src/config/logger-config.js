const {createLogger,format,transports} = require('winston')
const {combine,timestamp,label,printf} = format 

const customFormat = printf(({level,message,timestamp}) => {
    return `${timestamp} : ${level} : ${message}`;
});

const logger = createLogger({
    format:combine(
        timestamp({format:`YYYY-MM-DD HH-MM-SS`}),
        customFormat,
    ),
    transports:[
        new transports.Console(),
        // new transports.File({filename:"combines.log"}) for store the loggs
    ]
})

module.exports = logger;