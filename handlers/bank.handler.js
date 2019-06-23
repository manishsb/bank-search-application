const Model = require('../models');

module.exports = {
  findByIFSC: (req, res) => {
    const { ifsc } = req.params;
    Model.bank_branch.findByIfsc(ifsc).then((entry) => {
      res.send(entry);
    });
  },

  findByBankAndCity: (req, res) => {
    const { bank, city } = req.params;
    Model.bank_branch.findAllByBankAndCity(bank, city).then((entries) => {
      res.send(entries);
    });
  },
};
