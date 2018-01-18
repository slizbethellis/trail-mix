// export the customer model

module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer",
    {
      id: {
        type: DataTypes.INTERGER,
        allowNull: false
      },
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
      adventures: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
      },
    }, {

  return Customer;
};
