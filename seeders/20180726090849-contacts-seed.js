'use strict';
const fs = require('fs');

class Contact {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

let output = [];
let data = fs.readFileSync('./contacts.csv', 'utf8').split('\n');
for (let i = 0; i < data.length - 1; i++) {
  let dataContact = data[i].split(',');
  // console.log(dataContact);
  let contact = new Contact(dataContact[1],dataContact[2], dataContact[3]);
  output.push(contact);
}
// console.log(output);

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
   return queryInterface.bulkInsert('Contacts', output, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Contacts', output, {});
  }
};
