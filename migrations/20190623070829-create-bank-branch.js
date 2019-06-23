module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('bank_branches', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    ifsc: Sequelize.STRING,
    bank_id: Sequelize.INTEGER,
    branch: Sequelize.STRING,
    address: Sequelize.TEXT,
    city: Sequelize.STRING,
    district: Sequelize.STRING,
    state: Sequelize.STRING,
    bank_name: Sequelize.STRING,
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),

  down: queryInterface => queryInterface.dropTable('bank_branches'),
};
