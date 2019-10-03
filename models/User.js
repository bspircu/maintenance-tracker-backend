const { Model } = require("objection");

class User extends Model {
  static tableName() {
    return "users";
  }
}

module.exports = User;
