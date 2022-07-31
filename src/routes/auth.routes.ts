import Router from 'express-promise-router'
import * as authController from '../controller/auth.controller'
import { validator } from '../middleware/validation.middleware'
const router = Router()


router
    .post('/auth/login', authController.login)
    .post('/auth/refresh', authController.refresh)


export default router