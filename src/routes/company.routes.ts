import Router from 'express-promise-router'
import * as companyController from '../controllers/company.controller'
import { loadAuthenticated } from '../middleware/auth.middleware'
import { createCompany, patchUser, validator } from '../middleware/validation.middleware'


const router = Router()


router.get('/company-name-available', companyController.companyNameIsAvailable)


router.route('/companies')
    .get(loadAuthenticated, companyController.find)
    .post(validator(createCompany), companyController.create)


router.route('/companies/:id')
    .get(companyController.findOne)
    .patch(validator(patchUser), companyController.patch)
    .delete(companyController.remove)

    
export default router