const { Model, snakeCaseMappers } = require("objection");

class BaseModel extends Model {
  static get columnNameMappers() {
    return snakeCaseMappers();
  }
  static get modelPaths() {
    return [__dirname];
  }
}

module.exports = BaseModel;
