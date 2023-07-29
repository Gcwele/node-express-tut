const http = require('http');

// first paramenter represents requests the user makes
const server = http.createServer((req, res) => {
if(req.url === '/') {
    res.end('Welcome to our home page')
}
 if(req.url === '/about') {
    res.end('This is our about us page')
}
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href='/'>back home</a>`)
})

// what port our server is listeneing to
server.listen(5000)