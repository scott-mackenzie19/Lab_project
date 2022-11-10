/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
    return knex.schema.createTable('comments', (table) => {
        table.foreign('userID').references('username').inTable('users');
        table.string('eventID').references('eventID').inTable('events');
        table.string('comment');
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
    return knex.schema.dropTable('comments');

};
