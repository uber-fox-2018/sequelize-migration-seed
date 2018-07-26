'use strict';

const fs = require('fs')
class Contact{
  constructor(name,email,phone){
    this.name = name,
    this.email = email,
    this.phone = phone
  }
  
}

var dataContacs = fs.readFileSync('./contacts.csv','utf8').split('\n')
var arr = []
for(var i = 0; i < dataContacs.length;i++){
  var parse = dataContacs[i].split(',')
    var name = parse[1]
    var email = parse[2]
    var phone = parse[3]
  let contact = new Contact(name,email,phone)
  arr.push(contact)
}




module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', arr, {});
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
      */
     return queryInterface.bulkDelete('Contacts', null, {});
    }
};
