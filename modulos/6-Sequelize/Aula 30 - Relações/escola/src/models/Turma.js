module.exports = (sequelize, dataTypes) => {
  const Turma = sequelize.define('Turma', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  
    duracao: {
      type: dataTypes.INTEGER,
      allowNull: false
    },

    ano_inicio: {
      type: dataTypes.INTEGER,
      allowNull: false
    },

    semestre: {
      type: dataTypes.INTEGER,
      allowNull: false
    },

    curso_id: {
      type: dataTypes.INTEGER,
    },

    professor_id: {
      type: dataTypes.INTEGER,
    },
  }, {
    tableName: 'turmas',
    timestamps: false
  });

  Turma.associate = (models) => {
    Turma.belongsTo(models.Curso, {
      foreignKey: 'curso_id',
      as: 'curso'
    })

    Turma.belongsTo(models.Professor, {
      foreignKey: 'professor_id',
      as: 'professor'
    })
  }

  return Turma;
};