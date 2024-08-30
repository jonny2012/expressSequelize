'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    queryInterface.createTable("userPosts", {
      userId:{
        type:Sequelize.INTEGER,
        references:{
          model:"Users",
          key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE"
      },
      postId:{
        type:Sequelize.INTEGER,
        references:{
          model:"Posts",
          key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE"
      }
      
    })
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.dropTable('userPosts');
    
  }
};
