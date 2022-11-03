/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    console.log(process.env.MYSQL_CLOUD_HOST)

    return knex.schema.createTable('events', (table) => {
        table.string('eventID').notNullable();
        table.string('userID').notNullable();
        table.string('title').notNullable();
        table.string('description').notNullable().defaultTo('Enter description.');
        table.string('Zipcode').notNullable();
        table.string('address').notNullable();
        table.dateTime('time').notNullable();
        table.integer('likes').defaultTo(0);
        table.boolean('agerestrict').defaultTo(false);
        table.primary('eventid');
        table.foreign('userID').references('username').inTable('users');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

    return knex.schema.dropTable('events');

};
