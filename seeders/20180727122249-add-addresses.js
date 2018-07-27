module.exports = {
  up: (queryInterface, Sequelize) => {
    const fs = require('fs');

    const data = fs.readFileSync('./addresses.csv', 'utf8');
    let dataSplit = data.split('\n');
    let arr = []

    for (let i = 0; i < dataSplit.length; i++) {
      let obj = {}
      let temp = dataSplit[i].split(',').slice(1)
      obj.street = temp[0]
      obj.city = temp[1]
      obj.zipCode = temp[2]
      obj.createdAt = new Date
      obj.updatedAt = new Date
      arr.push(obj)
    }

    return queryInterface.bulkInsert('Addresses', arr, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};