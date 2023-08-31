const { SerialPort } = require('serialport')

const port = new SerialPort({
    path: '/dev/ttyUSB0',
    baudRate: 57600,
  })