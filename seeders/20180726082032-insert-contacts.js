'use strict';
const fs = require('fs')

class Contact{
  constructor(name,email,phone){
    this.name = name
    this.email = email
    this.phone = phone
  }
}

let result = []
let data = fs.readFileSync('./contacts.csv','utf8')
let dataContacts = data.split('\n')
for(let i =0; i<dataContacts.length -1; i++){
  let dataContact = dataContacts[i].split(',')
  let contact = new Contact(dataContact[1],dataContact[2],dataContact[3])
  result.push(contact)
}
// console.log(result);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts',result, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
