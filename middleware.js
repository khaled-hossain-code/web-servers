/**
 * Created by khaled on 4/2/2016.
 */


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

module.exports = middleware;