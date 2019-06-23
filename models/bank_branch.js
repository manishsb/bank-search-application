module.exports = (sequelize, DataTypes) => {
  const bankBranch = sequelize.define('bank_branch', {
    ifsc: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    bank_id: DataTypes.INTEGER,
    branch: DataTypes.STRING,
    address: DataTypes.TEXT,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    state: DataTypes.STRING,
    bank_name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  bankBranch.findByIfsc = (ifsc, query) => bankBranch.findOne({
    where: {
      ifsc,
    },
    ...query,
  });

  bankBranch.findAllByBankAndCity = (bankName, city, query) => bankBranch.findAll({
    where: {
      bank_name: bankName,
      city,
    },
    ...query,
  });

  return bankBranch;
};
