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
      cust_password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cust_logo: {
        type: DataTypes.STRING,
        allowNull: true
      },
      // note: Sequelize's documentation says array is only an option for PostgreSQL
      adventures: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });

  return Customer;
};
