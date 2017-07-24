//This is the pool model.
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('pool', {
    
    PoolName: DataTypes.TEXT,
  },
  {
    freezeTableName: true,
    tableName: 'pool',
    timestamps: false
  })
}

