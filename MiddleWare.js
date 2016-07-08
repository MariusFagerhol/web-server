var middleWare = {
    requireAuthentication: function (req, res, next) {
        console.log("private route hit!");
        next();
    },  
    
    logger: function(req, res, next) {
        var TheDate = new Date().toDateString();
    console.log("Request: " + TheDate + " " + req.method + " "+ req.originalUrl);
    next();
    }
    
};

module.exports = middleWare;