const http =  require('http')

http.createServer(function(req, res){
    console.log("servidor corriendo...")
    res.writeHead(200,  {'Content-Type': 'text/html'})
    res.end('<h1>Hola mundo</h1>')

}).listen(8081)