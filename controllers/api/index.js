const router = require('express').Router();
const albumRoutes = require('./albumroutes');
const commentRoutes = require('./commentroutes')

router.use('/albums', albumRoutes);
router.use('/comments', commentRoutes);

module.exports = router;