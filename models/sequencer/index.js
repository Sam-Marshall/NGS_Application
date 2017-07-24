//This is the Sequencer model.
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('sequencer', {
    
    SequencerName: DataTypes.STRING(200),
    SequencerType: DataTypes.STRING(200),
    Location: DataTypes.STRING(200),
    PurchaseDate: DataTypes.DATE,
    Kit: DataTypes.STRING(100)
  },
  {
    freezeTableName: true,
    tableName: 'sequencer',
    timestamps: false
  })
}

