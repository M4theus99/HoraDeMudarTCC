import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_al_tbendereco extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_endereco: {
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
    nm_bairro: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nm_rua: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nr_casa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ds_cep: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_complemento: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infob_al_tbendereco',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_endereco" },
        ]
      },
      {
        name: "infob_al_tbusuario_ibfk_2",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  return infob_al_tbendereco;
  }
}
