const express = require("express");
const app = express();
const path = require("path");
// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
// Import Controller
const controller = require("./controller");
controller.configure(app);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

//Middleware
app.use(express.json());
// Route Middlevares
app.use('/api/user', authRoute);

/* HERE IS I HAVE AN ERROR*/
app.use('/api/posts', postRoute);

// listening application on port
let server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Listening on port ${server.address().port}`);
});
