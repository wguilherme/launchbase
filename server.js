const express = require('express');
const server = express();

server.get("/", function(req, res) {
   return res.send("Hi! How's going?")
})

server.listen(5000, function(){
   console.log("server is reunning in port 5000")
})