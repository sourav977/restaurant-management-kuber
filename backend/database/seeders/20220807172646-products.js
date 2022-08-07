'use strict';
const models = require('../../models')
const Category = models.Category
const Product = models.Product

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
     const non_Veg_Main_Course = await Category.findOne({ where: { name:'Non Veg Main Course'} })
     const non_Veg_Starter = await Category.findOne({ where: { name:'Non Veg Starter'} })
 
     await Product.bulkCreate([
       {
         name: 'Butter Chicken',
         price: 120,
         stock:  50,
         categoryId: non_Veg_Main_Course.id
       },
       {
         name: 'Mutton Nihari',
         price: 180,
         stock:  70,
         categoryId: non_Veg_Main_Course.id
       },
       {
         name: 'Bali Prawn',
         price: 180,
         stock:  70,
         categoryId: non_Veg_Starter.id
       },
       {
         name: 'Chicken Kabab',
         price: 180,
         stock:  70,
         categoryId: non_Veg_Starter.id
       }
     ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Products', null, {});
  }
};
