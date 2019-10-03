const BaseModel = require("./BaseModel");

class User extends BaseModel {
  static tableName() {
    return "users";
  }
}

module.exports = User;
