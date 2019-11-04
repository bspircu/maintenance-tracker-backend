const knex = require("knex");
const knexConfig = require("./knexfile");
const { Model } = require("objection");
const express = require("express");
const User = require("./models/User");
const Manufacturer = require("./models/Manufacturer");

const cors = require("cors");
var bodyParser = require("body-parser");

const dataBase = knex(knexConfig.development);
Model.knex(dataBase);

const app = express();
const port = 3000;
app.use(cors());
app.options("*", cors());
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/users", async (req, res) => {
  const users = await User.query();
  res.send(JSON.stringify(users));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/user", async (req, res) => {
  console.log(req.body);
  const newUser = await User.query().insert({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });
  // console.log(req.body);
  // const newUser = await User.query().insert({
  //   firstName: "Brian",
  //   lastName: "Hall"
  // });
  res.sendStatus(200);
});
app.get("/users/:userId", async (req, res) => {
  const user = await User.query().findById(req.params.userId);
  res.send(JSON.stringify(user));
});

app.get("/manufacturers", async (req, res) => {
  const manufacturers = await Manufacturer.query();
  res.send(JSON.stringify(manufacturers));
});

app.get("/manufacturers/:manufacturerId", async (req, res) => {
  const manufacturer = await Manufacturer.query().findById(
    req.params.manufacturerId
  );
  res.send(JSON.stringify(manufacturer));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
