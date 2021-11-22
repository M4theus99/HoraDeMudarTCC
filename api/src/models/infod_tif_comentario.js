import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_tif_comentario extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_comentario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_anime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_comentario: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dt_comentario: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_tif_comentario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_comentario" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "id_anime",
        using: "BTREE",
        fields: [
          { name: "id_anime" },
        ]
      },
    ]
  });
  return infod_tif_comentario;
  }
}
