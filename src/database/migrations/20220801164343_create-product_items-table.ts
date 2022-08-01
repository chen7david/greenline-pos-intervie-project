import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('product_items', (table: Knex.TableBuilder) => {
        table.integer('id').primary().unique().notNullable()
        table.unique(['name', 'product_id'])
        table.unique(['sku', 'product_id'])
        table.string('product_item_id').unique().notNullable()
        table.string('name').notNullable()
        table.string('sku').notNullable()
        table.float('unit_price').notNullable()
        table.boolean('out_of_stock').defaultTo(true)
        table.text('description')
        table.integer('product_id').references('id').inTable('products').onDelete('CASCADE').index().notNullable()
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('product_items')
}