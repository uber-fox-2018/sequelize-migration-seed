'use strict';
const fs = require(`fs`)

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
      let rawData = fs.readFileSync(`./contacts.csv`,`utf8`).split(`\n`)
      let fileData = []
      
      for (let i = 0; i < rawData.length-1; i++) {
        let tmp = rawData[i].split(",").splice(1)
        let obj = {
          street:tmp[0],
          city:tmp[1],
          zip_code:tmp[2],
          createdAt: new Date,
          updatedAt: new Date
        }
        fileData.push(obj)
      }
    return queryInterface.bulkInsert(`Addresses`,fileData)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Addresses', null, {});
  }
};
