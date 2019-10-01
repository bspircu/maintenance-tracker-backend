const knex = require("knex");

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

dataBase
  .select()
  .table("test_table")
  .then(data => console.log(data))
  .catch(e => console.log(e));
