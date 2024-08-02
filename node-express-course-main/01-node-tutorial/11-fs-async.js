//asynchrones way of reading files

const { readFile, writeFile }= require('fs')
console.log('start')
readFile('./content/first.txt','utf8',(err, result)=>{
  if (err){
    console.log(err)
    return
  }
  const first= result
  readFile('./content/first.txt','utf8',(err, result)=>{
    if (err){
      console.log(err)
      return
    }
    const second= result
    // thee are a bunch of callabcks jsut ti write to a file which is not fully advised to do 

    writeFile('./content/result-async.txt',`here is the results ${first} ${second}`,{flag:'a'},(err,result)=>{
      if(err){
        console.log(err)
        return
      }
    console.log('done with this task')
    })
  })
  })
  console.log('starting the next one')