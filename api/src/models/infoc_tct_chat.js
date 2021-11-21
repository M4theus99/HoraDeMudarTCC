import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tct_chat extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_chat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_administrador: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_mensagem: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    dt_mensagem: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tct_chat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_chat" },
        ]
      },
      {
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
  return infoc_tct_chat;
  }
}
