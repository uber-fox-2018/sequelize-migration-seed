'use strict';

const fs = require('fs');
function bacaFile() {
  let data = fs.readFileSync('./contacts.csv', 'utf8').split('\n')
  let arr = []
  for(let i in data) {
    arr.push(data[i].split(','))
  }
  
  let arrObj = [];
  
  for(let i in arr) {
    let obj = {
      name: arr[i][1],
      email: arr[i][2],
      phone: arr[i][3],
      createdAt: new Date,
      updatedAt: new Date
    }
    arrObj.push(obj)
  }

  return arrObj;  
}

// console.log(bacaFile())

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
   return queryInterface.bulkInsert('Contacts', bacaFile(), {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Contacts', null, {});
  }
};
