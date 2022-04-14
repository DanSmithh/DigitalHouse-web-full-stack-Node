module.exports = (sequelize, dataTypes) => {
  const Professor = sequelize.define('Professor', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    nome: {
      type: dataTypes.STRING,
      allowNull: false
    },

    sobrenome: {
      type: dataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'professores',
    timestamps: false
  });

  Professor.associate = (models) => {
    Professor.hasMany(models.Turma, {
      foreignKey: 'professor_id',
      as: 'turmas'
    })
  }

  return Professor;
}