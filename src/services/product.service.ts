import Product from '../models/product.model'
import mixinService from './base.service'
import { ModelClass } from 'objection'
import User from 'models/user.model'

export default {


    ...mixinService(Product),


    async findOneByProductName(name: string) {
        return this.findOneByKey('name', name)
    },


    async create<T extends ModelClass<any>>(user: InstanceType<T>, data: Product) {
        const company = await user.$relatedQuery('company')
        return company.$relatedQuery('products').insert(data)
    },


}