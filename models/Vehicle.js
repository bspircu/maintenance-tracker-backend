const BaseModel = require("./BaseModel");
const { Model, ref } = require("objection");

class Vehicle extends BaseModel {
  static tableName() {
    return "vehicles";
  }
  static get relationMappings() {
    const User = require("./User");
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "vehicles.owner_id",
          // Any of the `to` and `from` fields can also be
          // references to nested fields (or arrays of references).
          // Here the relation is created between `persons.id` and
          // `animals.json.details.ownerId` properties. The reference
          // must be cast to the same type as the other key.
          to: "user.id"
        }
      }
    };
  }
}

module.exports = Vehicle;
