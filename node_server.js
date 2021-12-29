const http = require ('http');
const server= http.createServer(function (req,res) {
if(req.method ==='POST' && req.url==='/'){
    res.end('this is POST to /')

}
else if(req.method ==='GET' && req.url==='/'){
    res.end('this is POST to /')

}
else{
    res.end('the request is unknown')
}
});

server.listen(3000, function () {
    console.log('server has started to run')
});