//This is the project model.
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('project', {
    
    ProjectName: DataTypes.TEXT,
    Users_UserID: DataTypes.BIGINT
  },
  {
    freezeTableName: true,
    tableName: 'project',
    timestamps: false
  })
}

