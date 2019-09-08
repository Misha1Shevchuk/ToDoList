const express = require("express");
const app = express();
const path = require("path");
// Import Routes
const authRoute = require("./routes/auth");
const todolistRoute = require("./routes/todolist");

//Middleware
app.use(express.json());
// Route Middlevares
app.use("/api/", todolistRoute);
app.use("/api/user", authRoute);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// listening application on port
let server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Listening on port ${server.address().port}`);
});
