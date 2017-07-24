//Models module.

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {

  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports.User = sequelize.import('./user');
module.exports.Project = sequelize.import('./project');
module.exports.Sample = sequelize.import('./sample');
module.exports.Library = sequelize.import('./library');
module.exports.LibraryProtocol = sequelize.import('./libraryprotocol');
module.exports.LibraryIndex = sequelize.import('./libraryindex');
module.exports.Run = sequelize.import('./run');
module.exports.Subject = sequelize.import('./subject');
module.exports.Pool = sequelize.import('./pool');
module.exports.Sequencer = sequelize.import('./sequencer');
