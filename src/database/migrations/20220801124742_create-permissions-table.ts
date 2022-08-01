import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('permissions', (table: Knex.TableBuilder) => {
        table.integer('id').primary().unique().notNullable()
        table.string('name').unique().notNullable()
        table.text('description')
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('permissions')
}