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
      },
      adventure_image1: {
        type: DataTypes.STRING,
        allowNull: true
      },
      adventure_image2: {
        type: DataTypes.STRING,
        allowNull: true
      },
      adventure_image3: {
        type: DataTypes.STRING,
        allowNull: true
      }
      customer_id: {
        type: DataTypes.INTERGER,
        allowNull: true
      }
    });

    // associate with the customer - use ID to pass adventures and customers back and forth
    Adventure.belongsTo(db.Customer, {
      onDelete: "CASCADE",
      foreignKey: "id",
      targetKey: "customer_id"
    });

  return Adventure;
};
