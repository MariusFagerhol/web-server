var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

var middleWare = require("./middleWare");

app.use(middleWare.logger);

app.use(middleWare.requireAuthentication);

app.get("/About", middleWare.requireAuthentication, function(req, res) {
   res.send("Welcome to the about side!"); 
});

var myDir = __dirname;
app.use(express.static(myDir));


app.listen(PORT, function() {
    console.log("Express server started!"); 
    console.log("The Port number is: " + PORT);
});
