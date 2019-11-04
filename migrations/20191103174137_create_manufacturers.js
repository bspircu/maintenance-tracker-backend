exports.up = function(knex) {
  return knex.schema.createTable("manufacturers", function(table) {
    table.increments();
    table.string("name").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("manufacturers");
};
