import Router from 'express-promise-router'
import * as userController from '../controller/user.controller'
import { loadAuthenticated } from '../middleware/auth.middleware'
import { createUser, validator } from '../middleware/validation.middleware'
import { createValidator } from 'express-joi-validation'

const router = Router()

router.route('/users')
    .get(loadAuthenticated, userController.find)
    .post(validator(createUser), userController.create)

router.route('/users/:id')
    .get(userController.findOne)
    .patch(userController.patch)
    .delete(userController.remove)

export default router