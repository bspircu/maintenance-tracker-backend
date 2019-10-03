const { Model, snakeCaseMappers } = require("objection");

class BaseModel extends Model {
  static get columnNameMappers() {
    return snakeCaseMappers();
  }
}

module.exports = BaseModel;
