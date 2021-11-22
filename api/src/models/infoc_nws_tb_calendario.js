import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_nws_tb_calendario extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_calendario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_evento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_nws_tb_evento',
        key: 'id_evento'
      }
    },
    dt_evento: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_nws_tb_calendario',
    timestamps: false
  });
  return infoc_nws_tb_calendario;
  }
}
