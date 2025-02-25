const path = require('node:path')

// barra separadora segun sistema operativo
console.log(path.sep);

const filePath = path.join('content', 'subfolder', 'test.text');
console.log(filePath);

const base = path.basename('/tmp/')