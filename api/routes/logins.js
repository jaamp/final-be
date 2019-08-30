const router = require('express').Router()
const bcrypt = require('bcrypt')
const Person = require('../models/person')
const { decodeToken, generateToken } = require('../token/token')


router.get('/profile', async (req, res, next) => {
  try {
    const payload = decodeToken(req.token)
    const person = await Person.findOne({ _id: payload.id }).select('-__v -password')
    const status = 200
    res.json({ status, person })
  } catch (e) {
    console.error(e)
    const error = new Error('You are not authorized to access this route.')
    error.status = 400
    next(error)
  }
})

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body
  const person = await Person.findOne({ email })
  if (person) { 
    const valid = await bcrypt.compare(password, person.password)
    if (valid) {
      const status = 200
      const response = 'Logged in.'
      const token = generateToken(person._id)
      return res.status(status).json({ status, response, token })
    }  
  }

  const message = `Email or password incorrect. Please try again.`
  const error = Error(message)
  error.status = 401
  next(error)
})

router.post('/signup', async (req, res, next) => {
  const { email, password } = req.body
  const rounds = 10
  const hashed = await bcrypt.hash(password, rounds)

  const alreadyExists = await Person.findOne({ email })
  if (alreadyExists) {
    const error = new Error(`This email '${email}' is already used.`)
    error.status = 400

    return next(error)
  }

  const status = 201
  const person = await Person.create({ email, password: hashed })
  const token = generateToken(person._id)
  res.status(status).json({ status, token })
})

module.exports = router
