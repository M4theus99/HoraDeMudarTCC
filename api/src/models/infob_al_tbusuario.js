import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_al_tbusuario extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_usuario: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_cpf: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_senha: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_cod_rec: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    img_usuario: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infob_al_tbusuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  return infob_al_tbusuario;
  }
}
