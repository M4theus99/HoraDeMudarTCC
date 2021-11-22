import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tdv_genero extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_genero: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_genero: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tdv_genero',
    timestamps: false
  });
  return infoc_tdv_genero;
  }
}
