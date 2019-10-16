const knex = require("knex");
const knexConfig = require("./knexfile");
const { Model } = require("objection");
const express = require("express");
const User = require("./models/User");

const dataBase = knex(knexConfig.development);
Model.knex(dataBase);

const app = express();
const port = 3000;
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/users", async (req, res) => {
  const users = await User.query();
  res.send(JSON.stringify(users));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
