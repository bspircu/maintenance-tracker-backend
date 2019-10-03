const knex = require("knex");
const { Model } = require("objection");

async function main() {
  const dataBase = knex({
    client: "pg",
    connection: {
      host: "127.0.0.1",
      // user: "test123",
      //   password : 'your_database_password',
      database: "Bryan"
    },
    debug: true
  });

  Model.knex(dataBase);
}

main();
