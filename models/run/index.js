//This is the run model.
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('run', {
    
    RunDate: DataTypes.DATE,
    FlowCell_ID: DataTypes.INTEGER,
    FlowCell_Lot: DataTypes.STRING(100),
    ReagentsCartridge_Lot: DataTypes.DATE,
    ReagentsCartridge_Cycles: DataTypes.STRING(100),
    BufferCartridge_Lot: DataTypes.STRING(100),
    FinalPoolMolarity: DataTypes.STRING(100),
    Read_1: DataTypes.INTEGER,
    Read_2: DataTypes.INTEGER,
    Index_1: DataTypes.INTEGER,
    Index_2: DataTypes.INTEGER,
    Pool_PoolID: DataTypes.INTEGER,
    Pool_PoolID1: DataTypes.INTEGER,
    Sequencer_SequencerID: DataTypes.INTEGER
  },
  {
    freezeTableName: true,
    tableName: 'run',
    timestamps: false
  })
}

