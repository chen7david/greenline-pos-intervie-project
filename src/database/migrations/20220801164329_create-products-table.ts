import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('products', (table: Knex.TableBuilder) => {
        table.integer('id').primary().unique().notNullable()
        table.unique(['name', 'company_id'])
        table.string('name').unique().notNullable()
        table.text('description')
        table.integer('company_id').references('id').inTable('companies').onDelete('CASCADE').index().notNullable()
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('products')
}