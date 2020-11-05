const express = require('express')
const router = express()

router.use('/user', require('./user'))
router.use('/admin', require('./admin'))

router.use('*', function(req, res) {
    res.status(404).send('NOT FOUND');
});

module.exports = router