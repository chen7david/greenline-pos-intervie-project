import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { id: 1, username: "david", password: '$2b$12$sXVIRlWA6JuPvJgff.jqFeSg.fynjKVPtjwxDcJaQCcMwk5vx97o' },
        { id: 2, username: "max", password: '$2b$12$sXVIRlWA6JuPvJgff.jqFeSg.fynjKVPtjwxDcJaQCcMwk5vx97o' },
        { id: 3, username: "vanessa", password: '$2b$12$sXVIRlWA6JuPvJgff.jqFeSg.fynjKVPtjwxDcJaQCcMwk5vx97o' },
        { id: 4, username: "denise", password: '$2b$12$sXVIRlWA6JuPvJgff.jqFeSg.fynjKVPtjwxDcJaQCcMwk5vx97o' },
        { id: 5, username: "andy", password: '$2b$12$sXVIRlWA6JuPvJgff.jqFeSg.fynjKVPtjwxDcJaQCcMwk5vx97o' },
    ]);
};
