 var express = require('express');
 var app = express();
 //  app.use(express.static("web/.")); // for a page shows with css styles
 app.use('/public', express.static('public'));
 app.set('view engine', 'ejs');

 app.get('/', function(req, res) {
     res.render("index");
 });

 var routes = require("./route");
 routes.configure(app);

 // listening application on port 3000  
 var server = app.listen(3000, function() {
     console.log('Server Listening on port ' + server.address().port);
 });