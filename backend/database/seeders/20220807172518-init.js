'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Categories', [
      {
        name: 'Veg Starter'
      },
      {
        name: 'Non Veg Starter'
      },{
        name: 'Veg Main Course'
      },{
        name: 'Non Veg Main Course'
      },{
        name: 'Dessert'
      },{
        name: 'Soft Drinks'
      }
    ])

    await queryInterface.bulkInsert('Tables', [
      {
        name: 'Table 01'
      },
      {
        name: 'Table 02'
      },{
        name: 'Table 03'
      },{
        name: 'Family Table 01'
      },{
        name: 'Family Table 02'
      },{
        name: 'Team Table 01'
      }
    ])

    await queryInterface.bulkInsert('Clients', [
      {
        name: 'Sourav Patnaik',
        address: 'Bhubaneswar',
        email: 'abc@gamil.com',
        phone: '999999999',
        dni: '999999999'
      },
      {
        name: 'Sikan',
        address: 'CP, Delhi 90030',
        email: 'sikan@example.com',
        phone: '3804123123',
        dni: '40123123'
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories',null, {})

    await queryInterface.bulkDelete('Tables',null, {})

    await queryInterface.bulkDelete('Clients',null, {})
  }
};
