// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "maintenance_tracker"
    },
    migrations: {
      tableName: "knex_migrations"
    },
    pool: {
      min: 2,
      max: 10
    },
    debug: true
  }
};
