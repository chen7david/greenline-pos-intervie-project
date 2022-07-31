import User from '../models/user.model'
import mixinService from './base.service'


export default {
    ...mixinService(User)
}