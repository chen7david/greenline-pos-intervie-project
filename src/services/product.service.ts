import Product from '../models/product.model'
import mixinService from './base.service'


export default {


    ...mixinService(Product),


    async findOneByProductName(name: string) {
        return this.findOneByKey('name', name)
    },


}