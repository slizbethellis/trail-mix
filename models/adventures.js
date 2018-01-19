// export the adventure model

module.exports = function(sequelize, DataTypes) {
  var Adventure = sequelize.define("Adventure",
    {
      id: {
        type: DataTypes.INTERGER,
        allowNull: false
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
      },
    }, {
      // associate with the customer
      classMethods: {
        associate: function(models) {
          Adventure.belongsTo(models.Customer, {
            onDelete: "CASCADE",
            foreignKey: {
              allowNull: true
            }
          });
        }
      }
    });

  return Adventure;
};