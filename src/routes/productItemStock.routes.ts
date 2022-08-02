import Router from 'express-promise-router'
import * as productItemStockController from '../controllers/productItemStock.controller'
import { loadAuthenticated } from '../middleware/auth.middleware'
import { createUser, patchUser, validator } from '../middleware/validation.middleware'


const router = Router()


router.route('/product-item-stock')
    .get(loadAuthenticated, productItemStockController.find)
    .post(validator(createUser), productItemStockController.create)


router.param('id', productItemStockController.loadOne)
router.route('/product-item-stock/:id')
    .get(productItemStockController.findOne)
    .patch(validator(patchUser), productItemStockController.patch)
    .delete(productItemStockController.remove)



export default router