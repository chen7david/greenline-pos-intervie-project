import Router from 'express-promise-router'
import * as userController from '../controller/user.controller'
import { loadAuthenticated } from '../middleware/auth.middleware'
import { createUser, patchUser, validator } from '../middleware/validation.middleware'

const router = Router()

router.get('/username-available', userController.usernameIsAvailable)

router.route('/users')
    .get(loadAuthenticated, userController.find)
    .post(validator(createUser), userController.create)

router.route('/users/:id')
    .get(userController.findOne)
    .patch(validator(patchUser), userController.patch)
    .delete(userController.remove)

export default router