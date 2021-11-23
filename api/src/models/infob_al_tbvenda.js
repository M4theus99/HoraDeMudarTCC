import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_al_tbvenda extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_venda: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'infob_al_tbusuario',
        key: 'id_usuario'
      }
    },
    dt_venda: {
      type: DataTypes.DATE,
      allowNull: false
    },
    bt_situacao: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    qtd_parcelas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vl_total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    qtd_itens: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infob_al_tbvenda',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_venda" },
        ]
      },
      {
        name: "infob_al_tbusuario_iuih_1",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  return infob_al_tbvenda;
  }
}
