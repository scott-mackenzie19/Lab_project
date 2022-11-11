/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    console.log(process.env.MYSQL_CLOUD_HOST)

    return knex.schema.createTable('events', (table) => {
        table.increments('eventID').primary();
        table.string('userID').notNullable();
        table.string('title').notNullable();
        table.string('description').notNullable().defaultTo('Enter description.');
        table.string('Zipcode').notNullable();
        table.string('address').notNullable();
        table.time('time').notNullable();
        table.integer('likes').defaultTo(0);
        table.boolean('agerestrict').defaultTo(false);
        table.boolean('private_event').notNullable().defaultTo(false);
        table.boolean('close_friend').notNullable().defaultTo(false);
        // public event : anyone you're not friedns with
        // or private event : friends or close-friends only
        // close friend : close friends only are allowed
        // table.primary('eventID');
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
