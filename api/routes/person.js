const router = require('express').Router();
const Person = require('../models/person.js');
const mongoose = require('mongoose');

router.get('/', (req,res, next) => {
    res.status(200).json({
        message: "from persons"
    })
});

router.post('/', async (req, res, next) => {
    const { fname, lname, role, email, password } = req.body  
    const status = 201
    const person = await Person.create({ fname, lname, role, email, password })
    res.status(status).json({ status, person})
  })


module.exports = router;