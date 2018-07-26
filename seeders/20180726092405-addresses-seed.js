'use strict';
const fs = require('fs');

class Address {
  constructor(street_type, city_type, zip_code) {
    this.street_type = street_type;
    this.city_type = city_type;
    this.zip_code = zip_code;
  }
}

let output = [];
let data = fs.readFileSync('./addresses.csv', 'utf8').split('\n');
for (let i = 0; i < data.length - 1; i++) {
  let dataAddress = data[i].split(',');
  let address = new Address(dataAddress[1], dataAddress[2], dataAddress[3]);
  output.push(address);
}
// console.log(output);

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
   return queryInterface.bulkInsert('Addresses', output, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Addresses', output, {});
  }
};
