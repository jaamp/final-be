const mongoose = require('mongoose');

const assignmentSchema = mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    link: String,
    description: String,
    graded: Boolean,
    score: Number,
    studentId: String
})
module.exports = mongoose.model('Assignment', assignmentSchema)