import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_nws_tb_categoria extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ds_tema: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_nws_tb_categoria',
    timestamps: false
  });
  return infoc_nws_tb_categoria;
  }
}
