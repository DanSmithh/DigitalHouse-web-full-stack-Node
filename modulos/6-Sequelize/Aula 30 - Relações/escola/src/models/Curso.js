module.exports = (sequelize, dataTypes) => {
  const Curso = sequelize.define('Curso', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  
    nome: {
      type: dataTypes.STRING,
      allowNull: false
    },

    area_id: {
      type: dataTypes.INTEGER,
    },
  }, {
    tableName: 'cursos',
    timestamps: false
  });

  Curso.associate = (models) => {
    Curso.belongsTo(models.Area, {
      foreignKey: 'area_id',
      as: 'area'
    });

    Curso.hasMany(models.Turma, {
      foreignKey: 'curso_id',
      as: 'turmas'
    })
  }

  return Curso;
};