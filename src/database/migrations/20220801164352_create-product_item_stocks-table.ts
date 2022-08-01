import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('product_item_stocks', (table: Knex.TableBuilder) => {
        table.integer('id').primary().unique().notNullable()
        table.string('trxid').unique().notNullable()
        table.string('name').notNullable()
        table.float('unit_price').notNullable()
        table.integer('quantity').notNullable().defaultTo(0)
        table.text('description')
        table.integer('product_item_id').references('id').inTable('product_items').onDelete('CASCADE').index().notNullable()
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('product_item_stocks')
}