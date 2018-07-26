'use strict';
module.exports = (sequelize, DataTypes) => {
  var NewAddress = sequelize.define('NewAddress', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zipCode: DataTypes.STRING
  }, {});
  NewAddress.associate = function(models) {
    // associations can be defined here
  };
  return NewAddress;
};