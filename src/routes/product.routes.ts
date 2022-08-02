import Router from 'express-promise-router'
import * as productController from '../controllers/product.controller'
import { loadAuthenticated } from '../middleware/auth.middleware'
import { createUser, patchUser, validator } from '../middleware/validation.middleware'


const router = Router()


router.get('/product-name-available', productController.productNameIsAvailable)


router.route('/products')
    .get(loadAuthenticated, productController.find)
    .post(validator(createUser), productController.create)


router.route('/products/:id')
    .get(productController.findOne)
    .patch(validator(patchUser), productController.patch)
    .delete(productController.remove)


export default router