//This is the library model.
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('library', {
    
    LibraryName: DataTypes.TEXT,
    Pool_PoolID: DataTypes.INTEGER,
    Sample_SampleID: DataTypes.INTEGER,
    LibraryPro_LibraryProID: DataTypes.INTEGER,
    LibIndex_LibIndexID: DataTypes.INTEGER
  },
  {
    freezeTableName: true,
    tableName: 'library',
    timestamps: false
  })
}

