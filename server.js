var express = require('express');
var path = require('path');
var app = express();                         // create our app w/ express
var port = process.env.PORT || 5000;                 // set the port
var bodyParser = require('body-parser');
app.use(express.static('./dist/poc/'));         // set the static files location /public/img will be /img for users
app.set('views',path.join(__dirname + '/dist/poc/', '/dist/poc/index.html')); //optional since express defaults to CWD/views
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.all('*', function(req, res, next) {
   // add details of what is allowed in HTTP request headers to the response headers
   res.header('Access-Control-Allow-Origin', req.headers.origin);
   res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
   res.header('Access-Control-Allow-Credentials', false);
   res.header('Access-Control-Max-Age', '86400');
   res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
   // the next() function continues execution and will move onto the requested URL/URI
   next();
});
// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);