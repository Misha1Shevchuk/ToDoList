 const express = require('express');
 const app = express();
 app.use('/public', express.static('public'));
 app.set('view engine', 'pug');

 // If not exists - create tables into DB
 //  const methodsDB = require('./methodsDB');
 //  methodsDB.createTables();

 app.get('/', function(req, res) {
     res.render("index");
 });

 const routes = require("./route");
 routes.configure(app);

 // listening application on port 3000  
 let server = app.listen(3000, function() {
     console.log('Server Listening on port ' + server.address().port);
 });