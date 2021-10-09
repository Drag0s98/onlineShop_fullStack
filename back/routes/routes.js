const router = require('express').Router();
const pages = require('../controllers/api_controller')

//Api routes & respective controllers

router.get('/', pages.home)
router.get('/products', pages.products)




module.exports = router;

