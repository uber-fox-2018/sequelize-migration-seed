'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fs = require('fs');

    const data = fs.readFileSync('./contacts.csv', 'utf8');
    let dataSplit = data.split('\n');
    let arr = []

    for (let i = 0; i < dataSplit.length; i++) {
      let obj = {}
      let temp = dataSplit[i].split(',').slice(1)
      obj.name = temp[0]
      obj.email = temp[1]
      obj.phone = temp[2]
      obj.createdAt = new Date
      obj.updatedAt = new Date
      arr.push(obj)
    }

    return queryInterface.bulkInsert('Contacts', arr, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
