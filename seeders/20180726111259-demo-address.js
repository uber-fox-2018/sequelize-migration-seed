'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('NewAddresses', [{
      street: '711-2880 Nulla St',
      city: '	Mississippi	',
      zipCode: '96522',
      createdAt: new Date,
      updatedAt: new Date
    },{
      street: '8562 Fusce Rd',
      city: 'Nebraska',
      zipCode: '20620',
      createdAt: new Date,
      updatedAt: new Date
    },{
      street: '606-3727 Ullamcorper Street',
      city: 'Roseville',
      zipCode: '11523',
      createdAt: new Date,
      updatedAt: new Date
    },{
      street: '867-859 Sit Rd',
      city: 'New York',
      zipCode: '39531',
      createdAt: new Date,
      updatedAt: new Date
    },{
      street: 'San Antonio',
      city: 'San Antonio',
      zipCode: '47096',
      createdAt: new Date,
      updatedAt: new Date
    },{
      street: '651-8679 Sodales Av',
      city: 'Tamuning',
      zipCode: '10855',
      createdAt: new Date,
      updatedAt: new Date
    },{
      street: '191-103 Integer Rd',
      city: 'Corona New Mexico',
      zipCode: '08219',
      createdAt: new Date,
      updatedAt: new Date
    },{
      street: '2508 Dolor. Av',
      city: 'Muskegon KY	',
      zipCode: '12482',
      createdAt: new Date,
      updatedAt: new Date
    },{
      street: '666-4366 Lacinia Avenue',
      city: 'Ohio',
      zipCode: '19253',
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
  }
};
