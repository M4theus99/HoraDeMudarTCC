import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_mw_tblistaitem extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_lista_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_lista: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_filme: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_mw_tblistaitem',
    timestamps: false
  });
  return infob_mw_tblistaitem;
  }
}
