'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Contacts', [{
        name: 'Lani Rollins',
        email: 'blandit@quam.com',
        phone: '1-633-389-7173',
        createdAt: new Date,
        updatedAt: new Date
      },{
        name: 'McKenzie Burris',
        email: 'mauris.Morbi.non@nequeNullam.com',
        phone: '1-906-235-0832',
        createdAt: new Date,
        updatedAt: new Date
      },{
        name: 'McKenzie Burris',
        email: 'dui@magnis.ca',
        phone: 'dui@magnis.ca',
        createdAt: new Date,
        updatedAt: new Date
      },{
        name: 'Lamar Hardin',
        email: 'pharetra.felis.eget@mattisInteger.com',
        phone: '1-519-693-8091',
        createdAt: new Date,
        updatedAt: new Date
      },{
        name: 'Keegan Coleman',
        email: 'leo.Cras.vehicula@musProinvel.edu',
        phone: '1-998-626-8896',
        createdAt: new Date,
        updatedAt: new Date
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
