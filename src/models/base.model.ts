import { Model as BaseModel } from 'objection'
import knex from '../database/connection'
import pluralize from 'pluralize'
import { snakeCase } from 'lodash'
BaseModel.knex(knex)

class Model extends BaseModel {


    static get tableName(): string {
        return pluralize(snakeCase(this.name))
    }


}

export default Model