'use strict';
const User = require('../../app/models/User');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return User.create(  {
          name: "Distribuidora FastFeet",
          email: "admin@fastfeet.com",
          password_hash: bcrypt.hashSync("123456", 8),
          created_at: new Date(),
          updated_at: new Date()
        },
      {}
    );
  },

  down: (queryInterface, Sequelize) => {}
};
