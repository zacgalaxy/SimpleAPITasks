

// info about current user
const os= require('os')
console.log(os.userInfo())


// method returns the system uptime in seconds
// so bassicly how long the computer has been running. good for if you need a time depent varible or function \

console.log(os.uptime())


const currentOS={ 
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS)
 