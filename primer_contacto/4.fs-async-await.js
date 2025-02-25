const { readFile } = require('node:fs/promises');

async function init () {
    console.log('primer archivo ....');
    const text = await readFile('./archivo.txt', 'utf-8');
    console.log('primer texto', text);

    console.log('escribir mientras leemos');

    console.log('segundo archivo ....');
    const text2 = await readFile('./archivo2.txt', 'utf-8');
    console.log('segundo texto', text2);
}