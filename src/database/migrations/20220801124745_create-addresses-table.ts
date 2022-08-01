import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('addresses', (table: Knex.TableBuilder) => {
        table.integer('id').primary().unique()
        table.unique(['label', 'user_id'])
        table.string('address_id').unique().notNullable()
        table.string('label').notNullable()
        table.string('recipient').notNullable()
        table.string('street').notNullable()
        table.string('city').notNullable()
        table.string('country').notNullable()
        table.string('phone').notNullable()
        table.string('zip').notNullable()
        table.boolean('is_primary').defaultTo('false').notNullable()
        table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').index().notNullable()
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('addresses')
}