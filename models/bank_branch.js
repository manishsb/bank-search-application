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

  bankBranch.findByIfsc = ifsc => bankBranch.findOne({
    where: {
      ifsc,
    },
  });

  bankBranch.findAllByBankAndCity = (bankName, city) => bankBranch.findAll({
    where: {
      bank_name: bankName,
      city,
    },
  });

  return bankBranch;
};
