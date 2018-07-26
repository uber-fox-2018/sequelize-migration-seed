'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [{"name":"Matty Saenz","email":"msaenz0@xrea.com","phone":"712-934-0229"},
    {"name":"Tessi Baldassi","email":"tbaldassi1@microsoft.com","phone":"928-349-7250"},
    {"name":"Catharine Arangy","email":"carangy2@senate.gov","phone":"882-780-9348"},
    {"name":"Karlene Ungerechts","email":"kungerechts3@myspace.com","phone":"653-797-7800"},
    {"name":"Gil Matovic","email":"gmatovic4@tinyurl.com","phone":"880-606-1809"},
    {"name":"Silva Cadagan","email":"scadagan5@clickbank.net","phone":"869-183-4634"},
    {"name":"Bonni Fitkin","email":"bfitkin6@home.pl","phone":"287-642-8529"},
    {"name":"Mahmud Sustins","email":"msustins7@gmpg.org","phone":"501-735-6294"},
    {"name":"Moreen Pridie","email":"mpridie8@nih.gov","phone":"832-291-2650"},
    {"name":"Donica Ransome","email":"dransome9@smugmug.com","phone":"645-889-3428"}], {});
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
    return queryInterface.bulkDelete('Contacts', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
