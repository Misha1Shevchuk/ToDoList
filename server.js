 var express = require('express');
 var app = express();
 app.use(express.static("web/.")); // for a page shows with css styles


 // Display page index.html
 app.get('/', function(req, res) {
     res.sendFile(__dirname + "/web/index.html");
 });

 var routes = require("./route");
 routes.configure(app);

 // listening application on port 3000  
 var server = app.listen(3000, function() {
     console.log('Server Listening on port ' + server.address().port);
 });