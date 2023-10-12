const productController = require('../controller/productController');

const router = require('express').Router();

router.get('/brands',productController.getAllBrand);
router.post('/create',productController.createNewProduct);
router.get('/categories',productController.getAllCategory);
router.get('/brands/:id',productController.getAllProductBrand);
router.get('/',productController.getAllProduct);

module.exports = router;