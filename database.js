<<<<<<< HEAD
var Sequelize = require('sequelize');
var connectionUrl = 'postgres://carlpiao:carlpiao@localhost:5432/spotyfi' ;
var database = new Sequelize(connectionUrl) || process.env.DATABASE_URL;
=======
const Sequelize = require('sequelize');
const connectionUrl = 'postgres://carlpiao:carlpiao@localhost:5432/spotyfi' ;
const database;
if(process.env.DATABASE_URL){
  database = new Sequelize(process.env.DATABASE_URL,{
    dialect: 'postgres',
    protocol: 'postgres',
    logging: true
  });


}else{
  var database = new Sequelize(connectionUrl)
}
>>>>>>> ade59c57e4ac2f11f99b59683e3622eff31a5652

module.exports = database;
