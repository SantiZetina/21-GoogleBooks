const router = require('express').Router();
const userRoutes = require('server/routes/api/user-routes');

router.use('/users', userRoutes);

module.exports = router;
