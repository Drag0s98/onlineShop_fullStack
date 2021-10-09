const router = require('express').Router();
const pages = require('../controllers/api_controller')

//Api routes & respective controllers

router.get('/', pages.home)
router.get('/products', pages.products)
router.get('/manufactures', pages.manufacture)




module.exports = router;

