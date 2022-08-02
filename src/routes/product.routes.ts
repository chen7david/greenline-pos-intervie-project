import Router from 'express-promise-router'
import * as productController from '../controllers/product.controller'
import { loadAuthenticated } from '../middleware/auth.middleware'
import { createProduct, updateProduct, validator } from '../middleware/validation.middleware'


const router = Router()


router.get('/product-name-available', productController.productNameIsAvailable)


router.route('/products')
    .get(loadAuthenticated, productController.find)
    .post(loadAuthenticated, validator(createProduct), productController.create)


router.param('id', productController.loadOne)
router.route('/products/:id')
    .get(productController.findOne)
    .patch(validator(updateProduct), productController.patch)
    .delete(productController.remove)


export default router