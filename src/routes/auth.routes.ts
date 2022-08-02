import Router from 'express-promise-router'
import * as authController from '../controllers/auth.controller'
import { validator, loginUser } from '../middleware/validation.middleware'


const router = Router()


router
    .post('/auth/login', validator(loginUser), authController.login)
    .post('/auth/refresh', authController.refresh)


export default router