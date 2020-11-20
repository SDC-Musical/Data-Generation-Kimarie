const { Sequelize } = require('sequelize');

module.exports = new Sequelize('sdcDB', 'root', null, {
  dialect: 'mysql2',
}) 

try {
  await Sequelize.authenticate();
  console.log('Boooyah! mySQL DB connection ready for seeding!');
} catch(error) {
  console.error('Seeding DB connection error:', error);
}
