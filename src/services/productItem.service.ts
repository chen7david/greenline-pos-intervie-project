import ProductItem from '../models/product_item.model'
import mixinService from './base.service'


export default {


    ...mixinService(ProductItem),


    async findOneByProductItemName(name: string) {
        return this.findOneByKey('name', name)
    },


}