import Company from '../models/company.model'
import User from 'models/user.model'
import mixinService from './base.service'
import { Transaction } from 'objection'

type ICreate = Company & User;

export default {


    ...mixinService(Company),


    async findOneByCompanyName(name: string) {
        return this.findOneByKey('name', name)
    },


    async findOneByCompanyId(companyId: string) {
        return this.findOneByKey('company_id', companyId)
    },


    async create(data: ICreate): Promise<any> {

        return Company.transaction(async (trx: Transaction): Promise<any> => {
            const company = await Company.query(trx).insert({
                name: data.name,
                description: data.description,
            })

            const user = await company.$relatedQuery('users', trx).insert({
                username: data.username,
                password: data.password,
                email: data.email,
            })

            const role = await user.$relatedQuery('roles', trx).relate(1)

            return { company, user, role }
        })
    }

}