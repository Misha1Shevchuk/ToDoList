const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
    name: String,
    completed: {
        type: Boolean,
        default: false
    },
    project: {type: mongoose.Schema.Types.ObjectId, ref: 'Project'}
});

module.exports = mongoose.model("Task", TaskSchema);