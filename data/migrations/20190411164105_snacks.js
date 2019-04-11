
exports.up = function(knex, Promise) {
    return knex.schema.createTable('snacks', col => {
        col.increments();

        col.string('')
    })
};

exports.down = function(knex, Promise) {
  
};
