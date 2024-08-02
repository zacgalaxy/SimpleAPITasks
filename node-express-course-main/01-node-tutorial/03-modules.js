// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./04-names")
const sayHi = require("./05-utils")
const shk=require("./06-alternative-flavor")
require("./07-mind-grenade") // function is executed 
console.log(shk)
sayHi((names.zac))
