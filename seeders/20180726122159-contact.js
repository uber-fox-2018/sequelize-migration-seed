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

    let dataContact = fs.readFileSync('./contacts.csv', 'utf8').split('\n')

    let temp = []
    for(let i = 0; i < dataContact.length; i++){
        temp.push(dataContact[i].split(','))
    }

    let result = []
    for(let j = 0; j < temp.length; j++) {
        let obj = {}
        obj.name = temp[j][1]
        obj.email = temp[j][2]
        obj.phone = temp[j][3]
        obj.createdAt = new Date
        obj.updatedAt = new Date
        result.push(obj)
    }

    
    return queryInterface.bulkInsert('contacts', result, {});
  },


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('contacts', null, {})
  }
};
