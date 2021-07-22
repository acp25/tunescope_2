const router = require('express').Router();
const userroutes = require('./api/userroutes');
const homeRoutes = require('./homeroutes');
const apiRoutes = require('./api');
router.use('/user', userroutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
