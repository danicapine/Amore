const express = require('express');
const router = express.Router();
const con = require('../controller/HpController'); 
router.get('/', con.index);
module.exports = router;