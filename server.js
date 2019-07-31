 var express = require('express');
 var app = express();
 app.use('/public', express.static('public'));
 app.set('view engine', 'pug');

 app.get('/', function(req, res) {
     res.render("index");
 });

 var routes = require("./route");
 routes.configure(app);

 // listening application on port 3000  
 var server = app.listen(3000, function() {
     console.log('Server Listening on port ' + server.address().port);
 });