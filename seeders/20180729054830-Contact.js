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
    const fs = require('fs')
    const contactsJson = fs.readFileSync('./contacts.csv', 'utf8').split('\n')

    let resultContact = []
    for (let a = 0; a < contactsJson.length; a++) {
      let contact = contactsJson[a].split(',')
      if (contact != '') {
        let name = contact[1]
        let email = contact[2]
        let phone = contact[3]
      
        resultContact.push({ name: name, email: email, phone: phone, createdAt : new Date, updatedAt : new Date })
      }
    }
    return queryInterface.bulkInsert('Contacts', resultContact, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
     
    */
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
