import Model from './base.model'
import User from './user.model'
import Order from './order.model'
import { QueryContext } from 'objection'
import { digits } from '../utils/crypto.utility'

class Address extends Model {

    address_id: string;
    label: string;
    recipient: string;
    street: string;
    city: string;
    country: string;
    phone: string;
    zip: string;
    is_primary: boolean;
    

    async $beforeInsert(context: QueryContext): Promise<void> {
        await super.$beforeInsert(context)
        this.address_id = 'AD' + digits(12)
    }


    static get relationMappings() {

        return {

            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'addresses.user_id',
                    to: 'users.id',
                }
            },

            orders: {
                relation: Model.HasManyRelation,
                modelClass: Order,
                join: {
                    from: 'addresses.id',
                    to: 'orders.address_id',
                }
            },
        }
    }
}

export default Address