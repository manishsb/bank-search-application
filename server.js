const express = require('express');
const bodyParser = require('body-parser');
const bankHandlers = require('./handlers/bank.handler');
const loginHandler = require('./handlers/login.handler');
const accessMiddleware = require('./middleware');

const app = express();
app.use(bodyParser.json());

app.get('/bank', accessMiddleware.checkToken, bankHandlers.searchBanks);
app.post('/login', loginHandler.login);
app.get('*', bankHandlers.defaultRoute);
app.listen(process.env.PORT || 3030);
