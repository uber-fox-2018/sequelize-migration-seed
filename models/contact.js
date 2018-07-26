'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    // createdAt: { 
    //   type: Sequelize.DATE,
    //   allowNull: false,
    //   defaultValue: new Date() 
    // },
    // updatedAt: { 
    //   type: Sequelize.DATE,
    //   allowNull: false,
    //   defaultValue: new Date() 
    // },
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};