'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Addresses', 
   [{street: '711-2880 Nulla St',
      city: 'Mississippi',
      zip_code: '96522',
    },
    {
      street: '8562 Fusce Rd',
      city: 'Nebraska',
      zip_code: '20620',
    },
    {
      street: '606-3727 Ullamcorper Street',
      city: 'Roseville',
      zip_code: '11523',
    }], {});
   
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Person', null, {});
  }
};
