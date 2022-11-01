exports.up = function(knex) {
    console.log(process.env.MYSQL_CLOUD_HOST)

    return knex.schema.createTable('friends', (table) => {
        table.string('userID').notNullable();
        table.string('followedID').notNullable();
        table.boolean('close_friend').notNullable().defaultTo(false);
        table.primary(['userID', 'followedID']);
        table.foreign('userID').references('username').inTable('users');
        table.foreign('followedID').references('username').inTable('users');
    });
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('friends');
  
};