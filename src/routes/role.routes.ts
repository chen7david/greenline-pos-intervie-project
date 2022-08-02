import Router from 'express-promise-router'
import * as roleController from '../controller/role.controller'
import { loadAuthenticated } from '../middleware/auth.middleware'
import { createUser, patchUser, validator } from '../middleware/validation.middleware'

const router = Router()

router.get('/rolename-available', roleController.roleNameIsAvailable)

router.route('/roles')
    .get(loadAuthenticated, roleController.find)
    .post(validator(createUser), roleController.create)

router.route('/roles/:id')
    .get(roleController.findOne)
    .patch(validator(patchUser), roleController.patch)
    .delete(roleController.remove)

export default router