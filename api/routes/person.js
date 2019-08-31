const router = require('express').Router();
const Person = require('../models/person');
const { isLoggedIn, isSameUser } = require('../middleware/logins')
const { validate } = require('../middleware/person')
const mongoose = require('mongoose');

router.get('/', async (req, res, next) => {
    const status = 200
    //API routes to be used for views
    //const response = await Person.find({ "assignment.graded": {$eq:true}}).select('fname lname email assignment')
    //const response = await Person.find({ "assignment.graded": {$eq:false}}).select('fname lname email assignment')
    //const response = await Person.find({ role: {$eq:"student"}}).select('fname lname email assignment')
    const response = await Person.find({ role: {$eq:"student"}}).select('fname lname email assignment.score')
    res.json({ status, response })
  })

router.get('/:id', async (req,res, next) => {
    const status = 200
    const response = await Person.findById(req.params.id).select('assignment.title')
    res.json({ status, response })
});

router.post('/', async (req, res, next) => {
    const { fname, lname, role, email, password } = req.body  
    const status = 201
    const person = await Person.create({ fname, lname, role, email, password })
    res.status(status).json({ status, person})
  })


module.exports = router;