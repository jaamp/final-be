const mongoose = require('mongoose')
const config = require('../nodemon.json')
const Person = require('../api/models/person')
const bcrypt = require('bcrypt')


const resetPerson = async () => {
  mongoose.connect(config.env.MONGO_DB_CONNECTION, { useNewUrlParser: true })
  await Person.deleteMany() 
  return Person.create([
    {
        fname: "Bob",
        lname: "Smith",
        email: "bob@testmail.com",
        password: bcrypt.hashSync('password', 10),
        role: "student",
        assignment: [{
          title: "A classic",
          link: "https://www.pce.uw.edu/",
          description: "movie history report",
          graded: "true",
          score: 98,
        }]
    },
    {
      fname: "Sally",
      lname: "Jones",
      email: "sally@testmail.com",
      password: bcrypt.hashSync('password', 10),
      role: "student",
      assignment: [{
          title: "Ins and Outs of Valence",
          link: "https://www.pce.uw.edu/",
          description: "Chemistry assignment",
          graded: "true",
          score: 95,
        }]
  },
  {
    fname: "Frank",
    lname: "Wilson",
    email: "frank@testmail.com",
    password: bcrypt.hashSync('password', 10),
    role: "student",
    assignment: [{
        title: "War and Peace",
        link: "https://www.pce.uw.edu/",
        description: "Book Report",
        graded: "false",
        score: 0,
      }]
},
{
  fname: "Lori",
  lname: "Jackson",
  email: "lori@testmail.com",
  password: bcrypt.hashSync('password', 10),
  role: "student",
  assignment: [{
    title: "Body Functions",
    link: "https://www.pce.uw.edu/",
    description: "Biology project",
    graded: "false",
    score: 0,
  }]
},
{
  fname: "Lonnie",
  lname: "Washington",
  email: "lonnie@testmail.com",
  password: bcrypt.hashSync('password', 10),
  role: "student",
  assignment: [{
    title: "Small Engine Repair",
    link: "https://www.pce.uw.edu/",
    description: "Shop class project",
    graded: "true",
    score: 100,
  }]
},
{
  fname: "John",
  lname: "Jackson",
  email: "john@testmail.com",
  password: bcrypt.hashSync('password', 10),
  role: "student",
  assignment: [{
    title: "Binary Conversion",
    link: "https://www.pce.uw.edu/",
    description: "Math homeowrk",
    graded: "true",
    score: 90,
  }]
},
{
  fname: "Roy",
  lname: "Smith",
  email: "roy@testmail.com",
  password: bcrypt.hashSync('password', 10),
  role: "student",
  assignment: [{
    title: "Once upon a time",
    link: "https://www.pce.uw.edu/",
    description: "History project",
    graded: "false",
    score: 0,
  }]
},
{
  fname: "Jeff",
  lname: "Johnson",
  email: "jeff@testmail.com",
  password: bcrypt.hashSync('password', 10),
  role: "student",
  assignment:[{
      title: "The seven wonders",
      link: "https://www.pce.uw.edu/",
      description: "World history homework",
      graded: "true",
      score: 82,
    }]
},
{
  fname: "Kathy",
  lname: "Booker",
  email: "kathy@testmail.com",
  password: bcrypt.hashSync('password', 10),
  role: "student",
  assignment: [{
    title: "Life on the Edge",
    link: "https://www.pce.uw.edu/",
    description: "Extra credit",
    graded: "false",
    score: 0,
  }]
},
{
  fname: "Stu",
  lname: "Student",
  email: "student@email.com",
  password: bcrypt.hashSync('password', 10),
  role: "student",
  assignment: [{
    title: "Catcher in the Rye",
    link: "https://www.pce.uw.edu/",
    description: "Assignment on great book",
    graded: "true",
    score: 88,
  }]
},
{
  fname: "Adam",
  lname: "Admin",
  email: "admin@email.com",
  password: bcrypt.hashSync('password', 10),
  role: "admin",
  assignment:[]
}
  ])
}
resetPerson().catch(console.error).then((response) => {
  console.log(`Seeds successful! ${response.length} records created.`)
  return mongoose.disconnect()
})