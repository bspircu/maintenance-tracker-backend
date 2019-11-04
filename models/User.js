const BaseModel = require("./BaseModel");
const { Model, ref } = require("objection");

class User extends BaseModel {
  static get tableName() {
    return "users";
  }
  static get relationMappings() {
    return {
      vehicles: {
        relation: Model.HasManyRelation,
        modelClass: "./Vehicle",
        join: {
          from: "users.id",
          // Any of the `to` and `from` fields can also be
          // references to nested fields (or arrays of references).
          // Here the relation is created between `persons.id` and
          // `animals.json.details.ownerId` properties. The reference
          // must be cast to the same type as the other key.
          to: "vehicles.owner_id"
        }
      }
    };
  }
}

module.exports = User;
