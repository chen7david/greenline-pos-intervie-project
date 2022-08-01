import Router from 'express-promise-router'
import * as permissionController from '../controller/permission.controller'
import { loadAuthenticated } from '../middleware/auth.middleware'
import { createUser, patchUser, validator } from '../middleware/validation.middleware'

const router = Router()

router.route('/permissions')
    .get(loadAuthenticated, permissionController.find)
    .post(validator(createUser), permissionController.create)

router.route('/permissions/:id')
    .get(permissionController.findOne)
    .patch(validator(patchUser), permissionController.patch)
    .delete(permissionController.remove)

export default router