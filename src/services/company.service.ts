import Company from '../models/company.model'
import mixinService from './base.service'


export default {


    ...mixinService(Company),


    async findOneByCompanyName(name: string) {
        return this.findOneByKey('name', name)
    },


}