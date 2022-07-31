import { ModelClass } from 'objection'
import { paginate, IPaginate } from '../utils/paginate.utility'


export default <T extends ModelClass<any>>(model: T) => ({


    async find(page: any, limit?: any): Promise<IPaginate<T>> {
        const items = await model.query()
        return paginate(items, page, limit)
    },


    async findOne(id: number | string): Promise<InstanceType<T> | null> {
        return this.findOneByKey('id', id)
    },


    async findOneByKey(key: string, value: string | number): Promise<InstanceType<T> | null> {
        return model.query().where(key, value).first()
    },


    async create(data: object): Promise<InstanceType<T>> {
        return model.query().insert(data)
    },


    async patch(id: number | string, data: object) {
        const instance = await this.findOne(id)
        if (!instance) throw (new Error('invalid id'))
        return instance.$query().patch(data)
    },


    async delete(id: number | string): Promise<number> {
        const instance = await this.findOne(id)
        if (!instance) throw (new Error('invalid id'))
        return instance.$query().delete()
    }
})


