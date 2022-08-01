import Company from './company.model'
import Model from './base.model'
import ProductItem from './product_item.model'


class Product extends Model {


    id!: number;
    name: string;
    description: string;

    static get relationMappings() {


        return {


            company: {
                relation: Model.BelongsToOneRelation,
                modelClass: Company,
                join: {
                    from: 'products.company_id',
                    to: 'companies.id',
                }
            },


            productItems: {
                relation: Model.HasManyRelation,
                modelClass: ProductItem,
                join: {
                    from: 'products.id',
                    to: 'product_items.product_id',
                }
            },


        }

    }

}

export default Product