import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_al_tbcartao extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_cartao: {
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
    ds_cv: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nr_agencia: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nm_titular: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dt_validade: {
      type: DataTypes.DATE,
      allowNull: false
    },
    nr_cartao: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ds_cpf_titular: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infob_al_tbcartao',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cartao" },
        ]
      },
      {
        name: "infob_al_tbusuario_iuh_1",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  return infob_al_tbcartao;
  }
}
