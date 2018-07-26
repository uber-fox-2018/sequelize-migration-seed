"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
  
    */
   
    return queryInterface.bulkInsert(
      "Contacts",
      [
        {
          name: "Lani Rollins",
          email: "blandit@quam.com",
          phone: "1-633-389-7173"
        },
        {
          name: "McKenzie Burris,",
          email: "mauris.Morbi.non@nequeNullam.com",
          phone: "1-906-235-0832"
        },
        {
          name: "Amethyst Morgan",
          email: "dui@magnis.ca",
          phone: "1-548-366-6273"
        },
        {
          name: "Lamar Hardin",
          email: "pharetra.felis.eget@mattisInteger.com",
          phone: "1-519-693-8091"
        },
        {
          name: "Keegan Coleman",
          email: "leo.Cras.vehicula@musProinvel.edu",
          phone: "1-998-626-8896"
        }
      ],
      {}
    );
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
