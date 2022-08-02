import Router from 'express-promise-router'
import * as productItemController from '../controllers/productItem.controller'
import { loadAuthenticated } from '../middleware/auth.middleware'
import { createUser, patchUser, validator } from '../middleware/validation.middleware'


const router = Router()


router.get('/product-item-name-available', productItemController.productItemNameIsAvailable)


router.route('/product-items')
    .get(loadAuthenticated, productItemController.find)
    .post(validator(createUser), productItemController.create)


router.route('/product-items/:id')
    .get(productItemController.findOne)
    .patch(validator(patchUser), productItemController.patch)
    .delete(productItemController.remove)

    
export default router