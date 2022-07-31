import Router from 'express-promise-router'
import * as userController from '../controller/user.controller'
const router = Router()

router.route('/users')
    .get(userController.find)

export default router