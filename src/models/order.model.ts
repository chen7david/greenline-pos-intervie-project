import { QueryContext } from 'objection'
import { digits } from '../utils/crypto.utility'
import Model from './base.model'
import OrderItem from './order_item.model'
import Company from './company.model'
import User from './user.model'
import Address from './address.model'


class Order extends Model {


    id!: number;
    order_id: string;
    status: string;
    total_price: number;
    notes?: string;


    async $beforeInsert(context: QueryContext): Promise<void> {
        await super.$beforeInsert(context)
        this.order_id = 'OR' + digits(12)
    }


    static get relationMappings() {


        return {


            orderItems: {
                relation: Model.HasManyRelation,
                modelClass: OrderItem,
                join: {
                    from: 'orders.id',
                    to: 'order_items.order_id',
                }
            },


            company: {
                relation: Model.BelongsToOneRelation,
                modelClass: Company,
                join: {
                    from: 'orders.company_id',
                    to: 'companies.id',
                }
            },


            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'orders.user_id',
                    to: 'users.id',
                }
            },
            

            address: {
                relation: Model.BelongsToOneRelation,
                modelClass: Address,
                join: {
                    from: 'orders.address_id',
                    to: 'orders.id',
                }
            },


        }

    }

}

export default Order