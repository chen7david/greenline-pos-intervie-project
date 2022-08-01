import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('user_roles', (table: Knex.TableBuilder) => {
        table.increments().primary()
        table.unique(['user_id', 'role_id'])
        table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').index().notNullable()
        table.integer('role_id').references('id').inTable('roles').onDelete('CASCADE').index().notNullable()
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user_roles')
}