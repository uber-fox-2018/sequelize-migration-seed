'use strict';
const fs = require('fs')
class Address{
  constructor(street,city,zip_code){
    this.street = street
    this.city = city
    this.zip_code =zip_code
  }
}

var arr = []
var addressData = fs.readFileSync('./addresses.csv','utf8').split('\n')
for(var i = 0; i < addressData.length;i++){
  var parse = addressData[i].split(',')
  var street = parse[1]
  var city = parse[2]
  var zip_code = parse[3]
  var address = new Address(street,city,zip_code)
  arr.push(address)
}



module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses',arr,{})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
