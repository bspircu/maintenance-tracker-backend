exports.up = function(knex) {
  return knex.schema.createTable("vehicles", function(table) {
    table.increments();
    table.integer("year").notNullable();
    table.string("make").notNullable();
    table.string("model").notNullable();
    table
      .integer("owner_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("cascade");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("vehicles");
};
