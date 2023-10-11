'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('Pessoas',{
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nome:{
      type: Sequelize.STRING,
      allowNull:false
    },
    idade:{
      type: Sequelize.INTEGER,
      allowNull:false
    },
    createdAt: { 
      allowNull:false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull:false, 
      type: Sequelize.DATE
    }
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Pessoas')
  }
};
