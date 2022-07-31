import User from '../models/user.model'
import mixinService from './base.service'


export default {

    
    ...mixinService(User),


    async findOneByUsername(username: string){
        return this.findOneByKey('username', username)
    },


    async verifyPassword(user: User, password: string){
        return user.verifyPassword(password)
    }

}