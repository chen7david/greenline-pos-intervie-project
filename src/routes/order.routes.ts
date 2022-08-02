import Router from 'express-promise-router'
import * as orderController from '../controllers/order.controller'
import { loadAuthenticated } from '../middleware/auth.middleware'
import { createUser, patchUser, validator } from '../middleware/validation.middleware'


const router = Router()


router.route('/order')
    .get(loadAuthenticated, orderController.find)
    .post(validator(createUser), orderController.create)


router.route('/order/:id')
    .get(orderController.findOne)
    .patch(validator(patchUser), orderController.patch)
    .delete(orderController.remove)

    
export default router