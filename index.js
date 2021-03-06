'use strict';

require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

// Import Routes
const auth = require("./routes/auth");
const tasks = require("./routes/tasks");
const projects = require("./routes/projects");

//Middleware
app.use(express.json());
app.use(cors());
// Route Middlevares
app.use("/api/user", auth);
app.use("/api/tasks", tasks);
app.use("/api/projects", projects);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// listening application on port
let server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Server Listening on port ${server.address().port}`);
});

mongoose.connect(
    process.env.CONNECT_DB,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("Connected to DB")
);