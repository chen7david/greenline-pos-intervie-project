import Company from '../models/company.model'
import mixinService from './base.service'


export default {


    ...mixinService(Company),


    async findOneByCompanyname(name: string) {
        return this.findOneByKey('name', name)
    },


}