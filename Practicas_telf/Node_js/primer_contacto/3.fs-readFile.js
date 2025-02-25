const fs = require('node:fs')

console.log('primer archivo ....')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log('primer texto', text)
})

console.log('escribir mientras leemos')

console.log('segundo archivo ....')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('segundo texto', text)
})