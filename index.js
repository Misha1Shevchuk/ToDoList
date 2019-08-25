 const express = require('express');
 const app = express();

 const controller = require("./controller");
 controller.configure(app);

 // listening application on port 3001 
 let server = app.listen(3001, () => {
     console.log(`Server Listening on port ${server.address().port}`);
 });