const productController = require('../controller/productController');

const router = require('express').Router();

router.get('/',productController.getAllProduct);
router.get('/brands',productController.getAllBrand);
router.get('/categories',productController.getAllCategory);
router.get('/brands/:id',productController.getAllProductBrand);

module.exports = router;