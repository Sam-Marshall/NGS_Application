//This is the Sample model.
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('sample', {
    
    SampleName: DataTypes.TEXT,
    SampleType: DataTypes.STRING(100),
    CollectionDate: DataTypes.DATE,
    Species: DataTypes.STRING(100),
    SampleCharact_1: DataTypes.STRING(100),
    SampleCharact_2: DataTypes.STRING(100),
    SampleCharact_3: DataTypes.STRING(100),
    Project_ProjectID: DataTypes.INTEGER
  },
  {
    freezeTableName: true,
    tableName: 'sample',
    timestamps: false
  })
}

