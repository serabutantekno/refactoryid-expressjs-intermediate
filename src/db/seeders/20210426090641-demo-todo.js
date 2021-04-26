'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos', [{
      title: 'coffee',
      desc: 'make a cup of coffee',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'coffee 2',
      desc: 'make a cup of coffee 2',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
