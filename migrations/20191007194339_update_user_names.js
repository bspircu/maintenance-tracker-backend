exports.up = function(knex) {
  return knex.schema.table("users", function(table) {
    table.dropColumn("name");
    table.string("first_name");
    table.string("last_name");
  });
};

exports.down = function(knex) {
  return knex.schema.table("users", function(table) {
    table.string("name");
    table.dropColumn("first_name");
    table.dropColumn("last_name");
  });
};
