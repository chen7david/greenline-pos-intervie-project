import Router from 'express-promise-router'
import * as companyController from '../controller/company.controller'
import { loadAuthenticated } from '../middleware/auth.middleware'
import { createUser, patchUser, validator } from '../middleware/validation.middleware'

const router = Router()

router.get('/companyname-available', companyController.companynameIsAvailable)

router.route('/companies')
    .get(loadAuthenticated, companyController.find)
    .post(validator(createUser), companyController.create)

router.route('/companies/:id')
    .get(companyController.findOne)
    .patch(validator(patchUser), companyController.patch)
    .delete(companyController.remove)

export default router