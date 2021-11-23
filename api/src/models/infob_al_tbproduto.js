import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_al_tbproduto extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_produto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_produto: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vl_preco: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_categoria: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_produto: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_cod_barra: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vl_avaliacao: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bt_ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    img_produto: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infob_al_tbproduto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_produto" },
        ]
      },
    ]
  });
  return infob_al_tbproduto;
  }
}
