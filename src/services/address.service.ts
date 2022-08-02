import Address from '../models/address.model'
import mixinService from './base.service'


export default {


    ...mixinService(Address),


    async findOneByAddressLabel(label: string) {
        return this.findOneByKey('label', label)
    },


}