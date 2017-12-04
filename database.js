var Sequelize = require('sequelize');
var connectionUrl = 'postgres://carlpiao:carlpiao@localhost:5432/spotyfi' ;
var database = new Sequelize(connectionUrl) || process.env.DATABASE_URL;

module.exports = database;
