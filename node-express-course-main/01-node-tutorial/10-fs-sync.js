
//synchoronous way of reading and writing files
const { readFileSync, writeFileSync }= require('fs')
console.log('start')
const first= readFileSync('./content/first.txt','utf8')
const second= readFileSync('./content/second.txt','utf8')
//console.log(first,second)
writeFileSync('./content/result-sync.txt',`here is the results ${first} ${second}`, {flag:'a'})
//flag a is used to append the file

console.log('done with this task')
console.log('starting the next one')

