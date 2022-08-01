import { QueryContext } from 'objection'
import { digits } from '../utils/crypto.utility'
import Model from './base.model'
import Order from './order.model'


class OrderItem extends Model {


    id!: number;
    order_item_id: string;
    notes: string;


    async $beforeInsert(context: QueryContext): Promise<void> {
        await super.$beforeInsert(context)
        this.order_item_id = 'OI' + digits(10)
    }


    static get relationMappings() {


        return {


            order: {
                relation: Model.BelongsToOneRelation,
                modelClass: Order,
                join: {
                    from: 'order_items.order_id',
                    to: 'orders.id',
                }
            },


        }

    }

}

export default OrderItem