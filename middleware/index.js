const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.send({
          statusCode: 401,
          message: err.message,
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.send({
      statusCode: 401,
      message: 'Unauthorized',
    });
  }
};

module.exports = {
  checkToken,
};
