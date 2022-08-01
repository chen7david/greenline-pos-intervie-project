import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('role_permissions', (table: Knex.TableBuilder) => {
        table.increments().primary()
        table.unique(['permission_id', 'role_id'])
        table.integer('role_id').references('id').inTable('roles').onDelete('CASCADE').index().notNullable()
        table.integer('permission_id').references('id').inTable('permissions').onDelete('CASCADE').index().notNullable()
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('role_permissions')
}