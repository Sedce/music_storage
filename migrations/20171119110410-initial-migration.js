
'use strict';
const database = require('../database');
const models = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
      return database.sync();
  },

  down: function (queryInterface, Sequelize) {
      return database.drop();
  }
};
