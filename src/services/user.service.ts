import User from '../models/user.model'
import mixinService from './base.service'
import Company from 'models/company.model'
import { ModelClass } from 'objection'
export default {


    ...mixinService(User),


    async findOneByUsername(username: string) {
        return this.findOneByKey('username', username)
    },


    async create<T extends ModelClass<any>>(company: InstanceType<T>, data: User) {
        return await company.$relatedQuery('users').insert(data)
    },


    async verifyPassword(user: User, password: string) {
        return user.verifyPassword(password)
    }

}