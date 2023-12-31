const router = require('express').Router();
const productController = require('../controllers/productsControllers');


router.get('/', productController.getAllProduct)
router.get('/:id', productController.getProductById)
router.get('/search/:key', productController.searchProduct)
router.post('/', productController.createProduct)


module.exports = router