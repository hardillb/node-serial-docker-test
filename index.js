const { SerialPort } = require('serialport')

const port = new SerialPort({
    path: '/dev/ttyUSB0',
    baudRate: 57600,
  }, function (err) {
    if (err) {
      console.log(err)
    }
})

port.on('data', (data) => {
  console.log(data)
})