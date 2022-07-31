import { ModelClass } from 'objection'
import { paginate, IPaginate } from '../utils/paginate.utility'


export default <T extends ModelClass<any>>(model: T) => ({


    async find(page: number, limit?: number): Promise<IPaginate<T>> {
        const items = await model.query()
        return paginate(items, page, limit)
    },


    async findOne(id: number): Promise<InstanceType<T> | null> {
        return model.query().where('id', id).first()
    },


    async create(data: object): Promise<InstanceType<T>> {
        return model.query().insert(data)
    },


    async patch(id: number, data: object) {
        const instance = await this.findOne(id)
        if (!instance) throw (new Error('invalid id'))
        return instance.$query().patch(data)
    },
    

    async delete(id: number): Promise<number> {
        const instance = await this.findOne(id)
        if (!instance) throw (new Error('invalid id'))
        return instance.$query().delete()
    }
})


