// requires
var db = require("../models");

// export the adventure model
module.exports = function(sequelize, DataTypes) {
  var Adventure = sequelize.define("Adventure",
    {
      adventure_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      adventure_verbiage1: {
        type: DataTypes.STRING,
        allowNull: true
      },
      adventure_verbiage2: {
        type: DataTypes.STRING,
        allowNull: true
      },
      adventure_verbiage3: {
        type: DataTypes.STRING,
        allowNull: true
      },
      adventure_verbiage4: {
        type: DataTypes.STRING,
        allowNull: true
      },
      adventure_verbiage5: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });

    // associate with the customer - use ID to pass adventures and customers back and forth
    // This automatically creates a column called 'CustomerId'...don't add a similar field manually
    Adventure.associate = function(models) {
      Adventure.belongsTo(models.Customer, {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: true
        }
      });
    };

  return Adventure;
};
