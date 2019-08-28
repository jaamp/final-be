const mongoose = require('mongoose')
const config = require('../nodemon.json')
const Person = require('../api/models/person')

const reset = async () => {
  mongoose.connect(config.env.MONGO_DB_CONNECTION, { useNewUrlParser: true })
  // Careful with .remove() -- it sends a command directly to the database
  // and skips any mongoose validations
  await Person.deleteMany() // Deletes all records
  return Person.create([
    {
        lname: "Bob",
        fname: "Smith",
        email: "student@testmail.com",
        password: "password",
        role: "student"
    }
  ])
}
reset().catch(console.error).then((response) => {
  console.log(`Seeds successful! ${response.length} records created.`)
  return mongoose.disconnect()
})
