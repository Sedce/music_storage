const Sequelize = require('sequelize');
const connectionUrl = 'postgres://carlpiao:carlpiao@localhost:5432/spotyfi';
const database = new Sequelize(connectionUrl);

module.exports = database;
