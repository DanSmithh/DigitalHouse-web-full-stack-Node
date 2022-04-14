module.exports = (sequelize, dataTypes) => {
  const Area = sequelize.define('Area', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  
    tipo: {
      type: dataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'areas',
    timestamps: false
  });

  Area.associate = (models) => {
    Area.hasMany(models.Curso, {
      foreignKey: 'area_id',
      as: 'cursos'
    })
  }

  return Area;
};