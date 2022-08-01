import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('order_items', (table: Knex.TableBuilder) => {
        table.integer('id').primary().unique().notNullable()
        table.string('order_item_id').unique().notNullable()
        table.text('notes')
        table.integer('order_id').references('id').inTable('orders').onDelete('CASCADE').index().notNullable()
        table.integer('product_item_stock_id').references('id').inTable('product_item_stocks').onDelete('CASCADE').index().notNullable()
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('order_items')
}