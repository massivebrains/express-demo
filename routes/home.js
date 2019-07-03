const express = require('express');

var router = express.Router();

router.get('/', (req, res) => {

    res.json({status : true, data : 'Api Works' });
})

module.exports = router;