const BaseModel = require("./BaseModel");

class Manufacturer extends BaseModel {
  static get tableName() {
    return "manufacturers";
  }
}

module.exports = Manufacturer;
