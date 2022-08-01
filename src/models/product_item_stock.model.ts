import Model from './base.model'
import ProductItem from './product_item.model'

class ProductItemStock extends Model {


    id!: number;
    label: string; // name of product_item
    description: string;
    /* 
        reason for adding or removing stock: 
        stock received, inventory re-count, damage, theft, loss, return, sale
    */
    unit_price: number; // price the item was purchased for or the product price at the time of entry.
    quantity: number; // number of units.
    notes?: string; // notes from the record creator (admin/customer)
    

    static get relationMappings() {


        return {


            productItem: {
                relation: Model.BelongsToOneRelation,
                modelClass: ProductItem,
                join: {
                    from: 'product_item_stocks.product_item_id',
                    to: 'product_items.id',
                }
            },
            

        }

    }

}

export default ProductItemStock