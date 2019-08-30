const Person = require('../models/person')

const validate = async (req, _res, next) => {
  try {
    const person = new Person(req.body)
    await person.validateSync()
    next()
  } catch (e) {
    e.status = 400
    next(e)
  }
}

module.exports = { validate }