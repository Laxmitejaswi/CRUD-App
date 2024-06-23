const express = require('express');
const router = express.Router();
const {postProduct,getProducts,getProduct,deleteProduct,updateProduct} = require('../controllers/product.controller.js');

router.post('/',postProduct);
router.get('/:id',getProduct);
router.get('/',getProducts);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

module.exports = router;