// Modules
// CommonJS, every file is a module (by default)
// Modules - Encapsulated code (only share minimum)
const names = require('./4-first_module')
const sayHi = require('./5-second_module')
const data = require('./6-alternative-flavor')
console.log(data)

console.log(names)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

require('./7-mind-grenade') // if a file calls a function, that code runs right when you do require()
 
