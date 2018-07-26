'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', [{"street":"Carpenter","city":"Mali Iđoš","zip_code":"26559"},
    {"street":"Nancy","city":"Paris 19","zip_code":"75166"},
    {"street":"Bashford","city":"Charleston","zip_code":"25389"},
    {"street":"Golden Leaf","city":"Debre Tabor","zip_code":"75144"},
    {"street":"Tennessee","city":"Futang","zip_code":"7346"},
    {"street":"Canary","city":"Kakamas","zip_code":"8874"},
    {"street":"Vahlen","city":"Primero de Mayo","zip_code":"95193"},
    {"street":"Portage","city":"Nikísiani","zip_code":"75575"},
    {"street":"Toban","city":"Yedun","zip_code":"44766"},
    {"street":"Red Cloud","city":"Beloostrov","zip_code":"238323"}], {});
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
