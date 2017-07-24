//This is the library protocol model.
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('libraryprotocol', {
    
    LibraryProName: DataTypes.TEXT,
  },
  {
    freezeTableName: true,
    tableName: 'libraryprotocol',
    timestamps: false
  })
}

