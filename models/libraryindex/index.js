//This is the library index model.
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('libraryindex', {
    
    LibIndex_1: DataTypes.INTEGER,
    LibIndex_2: DataTypes.INTEGER
  },
  {
    freezeTableName: true,
    tableName: 'libraryindex',
    timestamps: false
  })
}

