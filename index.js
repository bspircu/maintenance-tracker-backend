const knex = require("knex");
const cors = require("cors");
const { Model } = require("objection");
const bodyParser = require("body-parser");
const express = require("express");
const knexConfig = require("./knexfile");
const User = require("./models/User");
const Manufacturer = require("./models/Manufacturer");

// Initialize database and inject it into objection's Model
const dataBase = knex(knexConfig.development);
Model.knex(dataBase);

// App initialization and configuration
const app = express();
app
  .options("*", cors())
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/users", async (req, res) => {
  const users = await User.query();
  res.send(JSON.stringify(users));
});
app.get("/users/:userId", async (req, res) => {
  const user = await User.query().findById(req.params.userId);
  res.send(JSON.stringify(user));
});

app.post("/user", async (req, res) => {
  try {
    await User.query().insert({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    });
    res.sendStatus(200);
  } catch (e) {
    // TODO: real error handling
    res.sendStatus(500);
  }
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

const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));

