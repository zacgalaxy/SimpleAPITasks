 const httip = require('http'); 

 //req = request, res = response
 const server= httip.createServer((req,res)=>{
if(req.url === '/'){
    res.end('Welcome to our home page')
}
else if (req.url === '/about'){
    res.end('Here is our short history')
}
else res.end(`<h1>oops</h1>
  <p>we cant seem to find the page you are looking for</p>
  <a href="/">back home</a>`)
})

 server.listen(5000) //port number
