import Router from 'express-promise-router'
import * as orderItemController from '../controllers/orderItem.controller'
import { loadAuthenticated } from '../middleware/auth.middleware'
import { createUser, patchUser, validator } from '../middleware/validation.middleware'


const router = Router()


router.route('/order-items')
    .get(loadAuthenticated, orderItemController.find)
    .post(validator(createUser), orderItemController.create)

    
router.route('/order-items/:id')
    .get(orderItemController.findOne)
    .patch(validator(patchUser), orderItemController.patch)
    .delete(orderItemController.remove)


export default router