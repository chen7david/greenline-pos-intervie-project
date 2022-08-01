import { QueryContext } from 'objection'
import { digits, md5 } from '../utils/crypto.utility'
import Company from './company.model'
import Model from './base.model'
import ProductItemStock from './product_item_stock.model'


class ProductItem extends Model {


    id!: number;
    product_item_id: string;
    name: string;
    sku: string;
    unit_price: number;
    out_of_stock?: boolean;
    description: string;


    async $beforeInsert(context: QueryContext): Promise<void> {
        await super.$beforeInsert(context)
        this.product_item_id = md5()
        this.sku = 'PR' + digits(12)
    }


    static get relationMappings() {


        return {


            product: {
                relation: Model.BelongsToOneRelation,
                modelClass: Company,
                join: {
                    from: 'product_items.company_id',
                    to: 'companies.id',
                }
            },


            productItemStock: {
                relation: Model.HasManyRelation,
                modelClass: ProductItemStock,
                join: {
                    from: 'product_items.id',
                    to: 'product_item_stocks.product_item_id',
                }
            },


        }

    }

}

export default ProductItem