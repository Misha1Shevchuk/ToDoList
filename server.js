 const express = require('express');
 const app = express();

 const controller = require("./controller");
 controller.configure(app);

// If not exist - create tables into DB:
//   const methodsDB = require('./methodsDB');
//   methodsDB.createTables();

 // listening application on port 3001 
 let server = app.listen(3001, function() {
     console.log('Server Listening on port ' + server.address().port);
 });