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
    let file = fs.readFileSync('contacts.csv').toString().split('\n')
    for(let i = 0 ; i < file.length ; i++){
      let obj = {}
      file[i] = file[i].split(',')
      file[i] = file[i].slice(1)
      obj.name = file[i][0]
      obj.email = file[i][1]
      obj.phone_number = file[i][2]
      obj.createdAt = new Date
      obj.updatedAt = new Date
      result.push(obj)
    }
    // console.log(result);
    return queryInterface.bulkInsert('Contacts',result,{});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Contacts',null,{})
  }
};
