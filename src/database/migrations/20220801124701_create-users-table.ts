import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table: Knex.TableBuilder) => {
        table.integer('id').primary().unique()
        table.unique(['username', 'company_id'])
        table.unique(['email', 'company_id'])
        table.string('user_id').unique().notNullable()
        table.string('username').notNullable()
        table.string('email').notNullable()
        table.string('password').notNullable()
        table.enu('status', ['inactive', 'active', 'disabled', 'deleted']).defaultTo('inactive')
        table.integer('company_id').references('id').inTable('companies').onDelete('CASCADE').index().notNullable()
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users')
}