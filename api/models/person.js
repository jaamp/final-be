const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    fname: String,
    lname: String,
    role: String,
    email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
    assignment: [{
      title: {
        type: String,
        required: true
      },
      link: String,
      description: String,
      graded: Boolean,
      score: Number,
    }]
})
module.exports = mongoose.model('Person', personSchema)