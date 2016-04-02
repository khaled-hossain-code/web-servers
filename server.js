/**
 * Created by khaled on 4/2/2016.
 */
var express = require('express');
var app = express();
var PORT = 8080;
var middleware = {  // this is a middleware
  requireAuthentication: function (req, res, next){
    console.log('private route hit');
    next();
  },
  logger: function(req,res,next){
    console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
    next();
  }
};

app.use(middleware.logger); // this use has to be at the top for application level middleware and app.use means application level middleware
app.use(express.static(__dirname + '/public')); // static folders

app.get('/admin',middleware.requireAuthentication, function(req, res){ // here second argument is a route based middleware
  res.send('Welcome To Admin Page.!');
});

app.listen(PORT, function(){
  console.log('Express Server Started On: Localhost:'+ PORT);
});