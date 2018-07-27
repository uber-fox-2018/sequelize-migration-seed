'use strict';

const fs = require('fs')

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
   let contacts = fs.readFileSync('contacts.csv','utf8').split('\n')
   let result = []
   let obj = {}
   for (let i = 0; i < contacts.length-1; i++){
       let arr = contacts[i].split(',')
       obj.name = arr[1]
       obj.email = arr[2]
       obj.phone = arr[3]
       obj.createdAt= new Date(),
       obj.updatedAt= new Date()
       result.push(obj)
       obj = {}
   }

   return queryInterface.bulkInsert('Contacts', result,{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Contacts', null,{})
  }
};
