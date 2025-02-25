const fs = require('node:fs')

console.log('primer archivo ....')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('primer texto', text)

console.log('escribir mientras leemos')

console.log('segundo archivo ....')
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('segundo texto', text2)