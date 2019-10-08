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
  //   const newUser = await User.query().insert({
  //     id: "3",
  //     firstName: "Justin",
  //     lastName: "Fisse"
  //   });
  const allUsers = await User.query();
  console.log(allUsers);
}

main();
