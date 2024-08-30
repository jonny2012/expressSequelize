'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 queryInterface.createTable("Posts",{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true,

},
title:{
    type:Sequelize.STRING,
    allowNull:false
},
description:{
    type:Sequelize.STRING,
    allowNull:false,

},
createdAt:{
  type:Sequelize.DATE,
  defaultValue:Sequelize.NOW
},
userId: {
  type: Sequelize.INTEGER,
  allowNull: false,

}
 })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
