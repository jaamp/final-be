const router = require('express').Router();
const Assignment = require('../models/assignment');

router.get('/', (req,res, next) => {
    res.status(200).json({
        message: "from assignments"
    })
});

router.post('/', (req,res, next) => {
    res.status(200).json({
        message: "post assignments"
    })
});

module.exports = router;