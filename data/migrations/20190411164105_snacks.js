
exports.up = function(knex, Promise) {
    return knex.schema.createTable('snacks', col => {
        col.increments();

        col.string('name').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('snacks')
};
