import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_hdm_caracteristicas extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_HDM_caracteristicas: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nr_idade: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    bt_branco: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_pardo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_amarelo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_negro: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_vermelho: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_castanhos: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_azuis: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_verdes: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_pretoOLHOS: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_outroOLHOS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bt_liso: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_ondulado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_cacheado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_crespo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_careca: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_loiro: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_ruivo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_castanhoescuro: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_castanhoclaro: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_pretoCABELO: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_outroCABELO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bt_alto: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_medio: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_baixo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_obeso: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_gordo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_magro: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_outroESTATURA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bt_adolescente: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_adulto: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_idoso: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_bone: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_chapeu: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_oculos: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_brinco: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_corrente: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bt_outroACESSORIO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_estado: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_cidade: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_bairro: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_rua: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nr_numero: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nr_cep: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ds_complemento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_ponto_de_ref: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_hdm_caracteristicas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_HDM_caracteristicas" },
        ]
      },
    ]
  });
  return infob_hdm_caracteristicas;
  }
}
