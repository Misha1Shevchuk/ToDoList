 const express = require('express');
 const app = express();

 const routes = require("./route");
 routes.configure(app);

 // listening application on port 3001 
 let server = app.listen(3001, function() {
     console.log('Server Listening on port ' + server.address().port);
 });