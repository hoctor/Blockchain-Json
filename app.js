var http =  require("http");
var request = require("request");

http.createServer(function(req, res){
    request({
        url:"http://blockchain.info/stats?format=json",
        json: true
    }, function(error, response, body){
        console.log(body);
    });
    console.log("Olá eu sou um novo usuário Bitcoin" + req.url);
    res.end("bitcoin para a lua!")


}).listen(80);