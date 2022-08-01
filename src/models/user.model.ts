import { QueryContext, ModelOptions } from 'objection'
import { digits } from '../utils/crypto.utility'
import Company from './company.model'
import Model from './base.model'
import Role from './role.model'
import bcrypt from 'bcrypt'
const BCRYPT_ROUNDS = 12

class User extends Model {


    id!: number;
    user_id: string;
    username: string;
    password: string;
    status?: string;


    async $beforeInsert(context: QueryContext): Promise<void> {
        await super.$beforeInsert(context)
        this.user_id = 'US' + digits(8)
        if (this.password) this.password = await bcrypt
            .hash(this.password, BCRYPT_ROUNDS)
    }


    async $beforeUpdate(opt: ModelOptions, context: QueryContext): Promise<void> {
        await super.$beforeUpdate(opt, context)
        if (this.password) this.password = await bcrypt
            .hash(this.password, BCRYPT_ROUNDS)
    }


    $formatJson(json: any) {
        json = super.$formatJson(json)
        delete json.password
        return json
    }


    async verifyPassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password)
    }


    static get relationMappings() {


        return {


            company: {
                relation: Model.BelongsToOneRelation,
                modelClass: Company,
                join: {
                    from: 'users.company_id',
                    to: 'companies.id',
                }
            },


            roles: {
                relation: Model.ManyToManyRelation,
                modelClass: Role,
                join: {
                    from: 'users.id',
                    to: 'roles.id',
                    through: {
                        from: 'user_roles.user_id',
                        to: 'user_roles.role_id',
                    }
                }
            },


        }
        
    }

}

export default User