const jwt = require('jsonwebtoken');

const login = (req, res) => {
  if (req.body.user) {
    const token = jwt.sign({ user: req.body.user }, process.env.SECRET_KEY, { expiresIn: '5 days' });
    res.send({ token });
  }
};

module.exports = {
  login,
};
