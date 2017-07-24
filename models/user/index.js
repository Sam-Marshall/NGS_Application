//This is the user model.
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    
    UserName: DataTypes.STRING,
    UserType: DataTypes.TEXT
  },
  {
    freezeTableName: true,
    tableName: 'user',
    timestamps: false
  })
}

