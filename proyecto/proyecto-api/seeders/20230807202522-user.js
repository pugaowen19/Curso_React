'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('users', [{
      name: 'John',
      username: 'Doe',
      email: 'demo@demo.com',
      password: '$2b$12$CDA/1.NRETkD/X7RR.l/CeMAf/AFgEPPDMpHT7mSCvKTSoAtjXq82', //123456
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Joe',
      username: 'Fellow',
      email: 'demo2@demo.com',
      password: '$2b$12$CDA/1.NRETkD/X7RR.l/CeMAf/AFgEPPDMpHT7mSCvKTSoAtjXq82', //123456
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
