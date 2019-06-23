const express = require('express');
const bodyParser = require('body-parser');
const bankHandlers = require('./handlers/bank.handler');
const loginHandler = require('./handlers/login.handler');
const accessMiddleware = require('./middleware');

const app = express();
app.use(bodyParser.json());

app.get('/ifsc/:ifsc', accessMiddleware.checkToken, bankHandlers.findByIFSC);
app.get('/bank/:bank/:city', accessMiddleware.checkToken, bankHandlers.findByBankAndCity);
app.post('/login', loginHandler.login);
app.get('*', bankHandlers.defaultRoute);
app.listen(process.env.PORT || 3030);
