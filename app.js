const { NODE_ENV, PORT } = process.env
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

app.use(require('cors')({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }));

require('./db/connection')()

app.use(require('morgan')('dev'))
app.use(bodyParser.json())

app.use(require('./api/middleware/set-token'))

app.use('/api', require('./api/routes/logins'))
app.use('/person', require('./api/routes/person'));

app.use((req,res,next) => {
    const error = new Error('Route not found');
    error.status(400);
    next(error);
})

app.use((err,req,res,next) => {
res.status(err.status || 500);
res.json({
    error: {message: error.message}
});
})

module.exports = app;