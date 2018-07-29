'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
   
    */
   const fs = require('fs')
const contactsJson = fs.readFileSync('./addresses.csv', 'utf8').split('\n')

let resultContact = []
for (let a = 0; a < contactsJson.length; a++) {
    let contact = contactsJson[a].split(',')
    if (contact != '') {
        let street  = contact[1]
        let zip_code = contact[2]
        resultContact.push({ street: street, zip_code: zip_code , createdAt : new Date, updatedAt : new Date})
    }
}
return queryInterface.bulkInsert('Addresses', resultContact, {});

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
