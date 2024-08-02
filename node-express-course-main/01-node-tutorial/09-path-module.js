const path = require('path')
//console.log(path.sep)
//platform specfic seprator as diff OS has diff seprator  

//creates the path to the file
const filepath=path.join('/content','subfolder','test.txt')
console.log(filepath)


//gets the end of the path
const base=path.basename(filepath)
console.log(base)

//absoulte path of the folder used in the file
const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute) 