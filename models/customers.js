// requires
var db = require("../models");

// export the customer model
module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer",
    {
      cust_email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cust_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cust_logo: {
        type: DataTypes.STRING,
        allowNull: true
      }
      // // note: Sequelize's documentation says array is only an option for PostgreSQL
      // adventures: {
      //   type: DataTypes.TEXT,
      //   allowNull: true
      // }
    });

  // leave the .associate function wrapper intact
  Customer.associate = function(models) {
    Customer.hasMany(models.Adventure);
  };

  return Customer;
};
