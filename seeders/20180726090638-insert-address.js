'use strict';
const fs = require('fs')

class Address{
  constructor(street,city,zipcode){
    this.street = street
    this.city = city
    this.zip_code = zipcode
  }
}

let result = []
let dataString = fs.readFileSync('./addresses.csv','utf8')
let dataAddresses = dataString.split('\n')
for(let i = 0; i<dataAddresses.length-1; i++){
  let dataAddress = dataAddresses[i].split(',')
  let address =  new Address(dataAddress[1],dataAddress[2],dataAddress[3])
  result.push(address)
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses',result, {});
    
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
