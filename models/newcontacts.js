'use strict';
module.exports = (sequelize, DataTypes) => {
  var NewContacts = sequelize.define('NewContacts', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  NewContacts.associate = function(models) {
    // associations can be defined here
  };
  return NewContacts;
};