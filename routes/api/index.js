const router = require('express').Router();

const userRoutes = require('./userroutes.js');

router.use('/users', userRoutes);

module.exports = router;