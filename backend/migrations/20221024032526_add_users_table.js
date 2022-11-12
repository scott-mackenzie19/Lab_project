/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
    return knex.schema.createTable('users', (table) => {
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('zipcode').notNullable();
        table.string('bio');
        table.boolean('anon');
        table.integer('age');
        table.string('pfp');
        table.integer('rating');
        table.primary('username');
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.dropTable('users');
  
};
