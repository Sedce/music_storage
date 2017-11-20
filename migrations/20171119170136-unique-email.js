'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.changeColumn('_users', 'email', {
            type: Sequelize.STRING,
            isEmail: true,
            unique: true,
            allowNull: false
        });
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface.changeColumn('_users', 'email', {
            type: Sequelize.STRING,
            isEmail: true,
            unique: false,
            allowNull: false
        });
    }
};
