import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tdv_pedido extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_pedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_cupom: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nr_pedido: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dt_pedido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ds_situacao_ped: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dt_lancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tdv_pedido',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pedido" },
        ]
      },
      {
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
      {
        name: "id_cupom",
        using: "BTREE",
        fields: [
          { name: "id_cupom" },
        ]
      },
    ]
  });
  return infoc_tdv_pedido;
  }
}
