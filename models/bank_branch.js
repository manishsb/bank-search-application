module.exports = (sequelize, DataTypes) => {
  const bankBranch = sequelize.define('bank_branch', {
    ifsc: DataTypes.STRING,
    bank_id: DataTypes.INTEGER,
    branch: DataTypes.STRING,
    address: DataTypes.TEXT,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    state: DataTypes.STRING,
    bank_name: DataTypes.STRING,
  }, {});
  return bankBranch;
};
