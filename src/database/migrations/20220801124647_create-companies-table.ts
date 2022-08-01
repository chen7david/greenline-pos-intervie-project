import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('companies', (table: Knex.TableBuilder) => {
        table.integer('id').primary().unique()
        table.string('company_id').primary().unique()
        table.string('name').unique().notNullable()
        table.string('description')
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('companies')
}