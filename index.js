const knex = require("knex");
const { Model } = require("objection");
const User = require("./models/User");

async function main() {
  const dataBase = knex({
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "Bryan"
    },
    debug: true
  });

  Model.knex(dataBase);
  //   const pets = await person
  //   .$relatedQuery('pets')
  //   .where('species', 'dog')
  //   .orderBy('name');
  const bryan = await User.query()
    .findOne({ first_name: "Bryan" })
    .eager("vehicles");

  console.log(bryan);
}

main();
