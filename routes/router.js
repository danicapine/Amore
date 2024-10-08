const express = require('express');
const router = express.Router();
const con = require('../controller/HpController'); 
router.get('/', con.index);
router.get('/product', con.product);
router.get('/cart', con.cart);
router.get('/blog', con.blog);
router.get('/about', con.about);
router.get('/contact', con.contact);
router.get('/features', con.features);
router.get('/roseblog', con.roseblog);
router.get('/tulipblog', con.tulipblog);
router.get('/carblog', con.carblog);



module.exports = router;

