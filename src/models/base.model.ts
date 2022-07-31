import { Model as BaseModel } from 'objection'
import knex from '../database/connection'
import pluralize from 'pluralize'
BaseModel.knex(knex)

class Model extends BaseModel {

    static get tableName(): string {
        return pluralize(this.name.toLowerCase())
    }
    
}

export default Model