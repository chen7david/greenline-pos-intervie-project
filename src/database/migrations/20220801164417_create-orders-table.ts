import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('orders', (table: Knex.TableBuilder) => {
        table.integer('id').primary().unique().notNullable()
        table.string('order_id').unique().notNullable()
        table.enu('status', ['unpaid', 'paid', 'canceled', 'posted', 'received', 'complete', 'returned']).notNullable().defaultTo('unpaid')
        table.float('total_price').notNullable()
        table.text('notes')
        table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').index().notNullable()
        table.integer('address_id').references('id').inTable('addresss').onDelete('CASCADE').index().notNullable()
        table.integer('company_id').references('id').inTable('companies').onDelete('CASCADE').index().notNullable()
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('orders')
}