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
   let addresses = fs.readFileSync('addresses.csv','utf8').split('\n')
   let result = []
   let obj = {}
   for (let i = 0; i < addresses.length-1; i++){
       let arr = addresses[i].split(',')
       obj.street = arr[1]
       obj.city = arr[2]
       obj.zip_code = arr[3]
       obj.createdAt= new Date(),
       obj.updatedAt= new Date()
       result.push(obj)
       obj = {}
   }
   return queryInterface.bulkInsert('Addresses', result,{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Addresses', null, {})
  }
};
