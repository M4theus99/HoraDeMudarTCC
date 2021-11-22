import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_tif_comunidade extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_comunidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_capa: {
      type: DataTypes.STRING(1555),
      allowNull: true
    },
    nm_comunidade: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_descricao: {
      type: DataTypes.STRING(2555),
      allowNull: true
    },
    dt_criacao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_tif_comunidade',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_comunidade" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  return infod_tif_comunidade;
  }
}
