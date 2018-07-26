'use strict';
const fs = require('fs');
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

   const contactContent = fs.readFileSync('./contacts.csv', 'utf8').split('\n');
   for(let i = 0; i < contactContent.length; i++) {
     contactContent[i] = contactContent[i].split(',');
     contactContent[i] = contactContent[i].slice(1);
   }
   
   let contactFix = [];
   for(let i = 0; i < contactContent.length; i++) {
     let objcontact = {
       name: contactContent[i][0], 
       email: contactContent[i][1], 
       phone: contactContent[i][2], 
       createdAt: new Date(),
       updatedAt: new Date(),
     };
   
     contactFix.push(objcontact);
   }

   return queryInterface.bulkInsert('Contacts', contactFix, {});

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
