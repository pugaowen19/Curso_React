'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    let records = [];
    let date = new Date();

    for(let i = 1 ; i<3; i++){
      for(let x = 0; x<5 ; x++){
        records.push({
          amount: (Math.random()*100000).toFixed(2),
          date:  date.getFullYear() + "-" + date.getMonth() + "-" +date.getDate(),
          userId: i,
          createdAt: date,
          updatedAt:date

        });
      }

    }
 
    return queryInterface.bulkInsert('invoices',records, {});

    
    

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('invoices', null, {});
  }
};
