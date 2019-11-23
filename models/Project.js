const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
    name: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model("Project", ProjectSchema);