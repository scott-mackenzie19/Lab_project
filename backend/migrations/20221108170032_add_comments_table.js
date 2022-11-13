/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
    return knex.schema.createTable('comments', (table) => {
        table.string('userID');
        table.integer('eventID').unsigned();
        table.string('comment');
        table.primary(['userID', 'eventID', 'comment']);
        table.foreign('userID').references('username').inTable('users');
        table.foreign('eventID').references('eventID').inTable('events');
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
    return knex.schema.dropTable('comments');

};
