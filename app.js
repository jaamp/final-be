//const { NODE_ENV, PORT } = process.env
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

require('./db/connection')()

const personRoutes = require('./api/routes/person');
const assignmentRoutes = require('./api/routes/assignment');

app.use(require('morgan')('dev'))
//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use('/person', personRoutes);
app.use('/assignment', assignmentRoutes);


app.use((reg, res, next) => {
    res.status(200).json({
        message: 'it works'
    })
})

app.use((req,res,next) => {
    const error = new Error('Route not found');
    error.status(400);
    next(error);
})

app.use((req,res,next) => {
res.status(err.status || 500);
res.json({
    error: {message: error.message}
});
})

module.exports = app;