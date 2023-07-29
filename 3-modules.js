// CommonJS, every file is module (by default)
// Modules - Encapsulated code ( only share minimum )
const names = require('./4-names.js');
const sayHi = require('./5-utils.js');
const data = require('./6-alternative-flavor.js')
require('./7-mind-grenade.js')
console.log(data)
sayHi('Susan')
sayHi(names.peter)
sayHi(names.john)
