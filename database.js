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

module.exports = database;
