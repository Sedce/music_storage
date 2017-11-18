// TODO: Use Sequelize in here
const Sequelize = require('sequelize');

const connectionUrl = 'postgres://postgres:spotyfi@localhost:5432/pgdemo';
const database = new Sequelize(connectionUrl);

database.sync();
module.exports.Visitor = Visitor;
