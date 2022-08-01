import Model from './base.model'
import { QueryContext } from 'objection'
import { uuid } from '../utils/crypto.utility'
import User from './user.model'
import Role from './role.model'
import Product from './product.model'


class Company extends Model {


    id!: number;
    company_id: string;
    name: string;
    description: string;


    async $beforeInsert(context: QueryContext): Promise<void> {
        await super.$beforeInsert(context)
        this.company_id = uuid()
    }


    static get relationMappings() {


        return {


            users: {
                relation: Model.HasManyRelation,
                modelClass: User,
                join: {
                    from: 'companies.id',
                    to: 'users.company_id',
                }
            },


            roles: {
                relation: Model.HasManyRelation,
                modelClass: Role,
                join: {
                    from: 'companies.id',
                    to: 'roles.company_id',
                }
            },


            products: {
                relation: Model.HasManyRelation,
                modelClass: Product,
                join: {
                    from: 'companies.id',
                    to: 'products.company_id',
                }
            },


        }
    }

}

export default Company