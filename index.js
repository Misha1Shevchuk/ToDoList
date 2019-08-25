 const express = require('express');
 const app = express();
 const path = require('path');

 const controller = require("./controller");
 controller.configure(app);

 // serve static files from the React app
 app.use(express.static(path.join(__dirname, 'client/build')));


 app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname + '/client/build/index.html'));
 });

 // listening application on port
 let server = app.listen(process.env.PORT || 3001, () => {
     console.log(`Server Listening on port ${server.address().port}`);
 });