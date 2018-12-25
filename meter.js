const fs = require('fs')
const jm = require('js-meter')
const isPrint = false
const isKb = true       // or Mb
const m = new jm({isPrint, isKb})

const fileName = process.argv[2]

if(fileName) require('./'+fileName)

const meter = m.stop()

console.log(meter)

fs.writeFileSync('./report/'+fileName+'.json', JSON.stringify(meter), 'utf8')