'use strict';

const fs = require('fs');
function bacaFile() {
  let data = fs.readFileSync('./addresses.csv', 'utf8').split('\n')
  let arr = []
  for(let i in data) {
    arr.push(data[i].split(','))
  }
  
  let arrObj = [];
  
  for(let i in arr) {
    let obj = {
      street: arr[i][1],
      city: arr[i][2],
      zip_code: arr[i][3],
      createdAt: new Date,
      updatedAt: new Date
    }
    arrObj.push(obj)
  }

  return arrObj;  
}


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
   return queryInterface.bulkInsert('Addresses', bacaFile(), {});
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
