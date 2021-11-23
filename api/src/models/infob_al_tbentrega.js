import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_al_tbentrega extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_entrega: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'infob_al_tbproduto',
        key: 'id_produto'
      }
    },
    id_endereco: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'infob_al_tbendereco',
        key: 'id_endereco'
      }
    },
    ds_situacao: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dt_saida: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dt_chegada: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infob_al_tbentrega',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_entrega" },
        ]
      },
      {
        name: "infob_al_tbusuario_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "id_produto" },
        ]
      },
      {
        name: "infob_al_tbusuario_iuih_2",
        using: "BTREE",
        fields: [
          { name: "id_endereco" },
        ]
      },
    ]
  });
  return infob_al_tbentrega;
  }
}
