import Model from './base.model'
import { QueryContext, ModelOptions, JSONSchemaType,  } from 'objection'
import bcrypt from 'bcrypt'
const BCRYPT_ROUNDS = 12

class Permission extends Model {
    
    id!: number;
    user_id: string;
    username: string;
    password: string;
    status?: string;

    async $beforeInsert(context: QueryContext): Promise<void> {
        await super.$beforeInsert(context)
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


}

export default Permission