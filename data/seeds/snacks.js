
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('snacks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('snacks').insert([
        {name: 'Apple'},
        {name: 'Granola Bar'},
        {name: 'Dried Fruit'}
      ]);
    });
};
