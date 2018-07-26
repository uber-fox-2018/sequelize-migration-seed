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
  let result = []
  let fs = require('fs')
  let file = fs.readFileSync('addresses.csv').toString().split('\n')
  for(let i = 0 ; i < file.length ; i++){
    let obj = {}
    file[i] = file[i].split(',')
    file[i] = file[i].slice(1)
    obj.street = file[i][0]
    obj.city = file[i][1]
    obj.zip_code = file[i][2]
    obj.createdAt = new Date
    obj.updatedAt = new Date
    result.push(obj)
  }
  
  return queryInterface.bulkInsert('Addresses', result,{});
   
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Addresses',null,{})
  }
};
