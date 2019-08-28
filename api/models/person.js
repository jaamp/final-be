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
})
module.exports = mongoose.model('Person', personSchema)