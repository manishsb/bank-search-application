const Model = require('../models');

const getLimitAndOffset = ({ limit, offset }) => {
  const limitVal = parseInt(limit, 10);
  const offsetVal = parseInt(offset, 10);
  const queryObject = {};
  if (limitVal) {
    queryObject.limit = limitVal;
  }
  if (offsetVal) {
    queryObject.offset = offsetVal;
  }
  return queryObject;
};

const findByIFSC = (req, res) => {
  const { ifsc } = req.params;
  Model.bank_branch.findByIfsc(
    ifsc, getLimitAndOffset(req.query),
  ).then((entry) => {
    res.send(entry);
  });
};

const findByBankAndCity = (req, res) => {
  const { bank, city } = req.params;
  Model.bank_branch.findAllByBankAndCity(
    bank, city, getLimitAndOffset(req.query),
  ).then((entries) => {
    res.send(entries);
  });
};

const defaultRoute = (req, res) => {
  res.status(404).send('Page Not Found');
};

module.exports = {
  findByIFSC,
  findByBankAndCity,
  defaultRoute,
};
