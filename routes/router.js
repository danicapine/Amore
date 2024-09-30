const express = require('express');
const router = express.Router();
const con = require('../controller/HpController'); 
router.get('/', con.index);
router.get('/', con.product);
module.exports = router;