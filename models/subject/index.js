//This is the Subject model.
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('subject', {
    
    SubjectName: DataTypes.TEXT,
    SubjectCharact_1: DataTypes.TEXT,
    SubjectCharact_2: DataTypes.TEXT,
    SubjectCharact_3: DataTypes.TEXT
  },
  {
    freezeTableName: true,
    tableName: 'subject',
    timestamps: false
  })
}

