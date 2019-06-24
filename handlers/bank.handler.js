const Model = require('../models');

const getLimitAndOffset = ({ limit, offset }) => {
  const limitVal = parseInt(limit, 10);
  const offsetVal = parseInt(offset, 10);
  const queryObject = {};
  if (limitVal) { queryObject.limit = limitVal; }
  if (offsetVal) { queryObject.offset = offsetVal; }
  return queryObject;
};

const getBankProperties = ({ ifsc, bank, city }) => {
  const queryObject = {};
  if (ifsc) { queryObject.ifsc = ifsc; }
  if (bank) { queryObject.bank = bank; }
  if (city) { queryObject.city = city; }
  return queryObject;
};

const searchBanks = (req, res) => {
  Model.bank_branch.searchBanks(
    getBankProperties(req.query),
    getLimitAndOffset(req.query),
  ).then((result) => {
    res.send(result);
  });
};

const defaultRoute = (req, res) => {
  res.status(404).send('Page Not Found');
};

module.exports = {
  defaultRoute,
  searchBanks,
};
