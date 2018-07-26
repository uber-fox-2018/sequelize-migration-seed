'use strict';
const fs = require('fs');
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

    const addressContent = fs.readFileSync('./addresses.csv', 'utf8').split('\n');
    for(let i = 0; i < addressContent.length; i++) {
      addressContent[i] = addressContent[i].split(',');
      addressContent[i] = addressContent[i].slice(1);
    }
    
    let addressFix = [];
    for(let i = 0; i < addressContent.length; i++) {
      let objAddress = {
        street: addressContent[i][0], 
        city: addressContent[i][1], 
        zip_code: addressContent[i][2], 
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    
      addressFix.push(objAddress);
    }

    return queryInterface.bulkInsert('Addresses', addressFix, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
