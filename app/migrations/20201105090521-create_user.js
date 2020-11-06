'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false

      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      first_name: {
        type: Sequelize.STRING(25),
      },
      last_name: {
        type: Sequelize.STRING(25),
      },
      resetPasswordToken: {
        type: Sequelize.STRING(100)
      },
      resetPasswordExpiry: {
        type: Sequelize.DATE
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,

    })
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users")

  }
};


// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     return queryInterface.createTable("Users", {
//       id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//       username: {
//         type: Sequelize.STRING(15),
//         allowNull: false
//       },
//       password: {
//         type: Sequelize.STRING(15),
//         allowNull: false
//       },
//       createdAt: Sequelize.DATE,
//       updatedAt: Sequelize.DATE,
//     })
//   },

//   down: async (queryInterface, Sequelize) => {
//     return queryInterface.dropTable("Users")
//   }
// };