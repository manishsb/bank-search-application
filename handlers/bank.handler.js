const Model = require('../models');

module.exports = {
  findByIFSC: (req, res) => {
    const { ifsc } = req.params;
    const { limit, offset } = req.query;
    Model.bank_branch.findByIfsc(ifsc, { limit, offset }).then((entry) => {
      res.send(entry);
    });
  },

  findByBankAndCity: (req, res) => {
    const { bank, city } = req.params;
    const { limit, offset } = req.query;
    Model.bank_branch.findAllByBankAndCity(bank, city, { limit, offset }).then((entries) => {
      res.send(entries);
    });
  },

  defaultRoute: (req, res) => {
    res.status(404).send('Page Not Found');
  },
};
