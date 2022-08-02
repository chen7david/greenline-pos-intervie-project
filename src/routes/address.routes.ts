import Router from 'express-promise-router'
import * as addressController from '../controllers/address.controller'
import { loadAuthenticated } from '../middleware/auth.middleware'
import { createUser, patchUser, validator } from '../middleware/validation.middleware'


const router = Router()


router.get('/address-label-available', addressController.addressLabeleIsAvailable)


router.route('/address')
    .get(loadAuthenticated, addressController.find)
    .post(validator(createUser), addressController.create)

    
router.route('/address/:id')
    .get(addressController.findOne)
    .patch(validator(patchUser), addressController.patch)
    .delete(addressController.remove)

    
export default router