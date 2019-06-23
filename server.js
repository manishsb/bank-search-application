const express = require('express');
const bankHandlers = require('./handlers/bank.handler');

const app = express();

app.get('/ifsc/:ifsc', bankHandlers.findByIFSC);
app.get('/bank/:bank/:city', bankHandlers.findByBankAndCity);
app.get('*', bankHandlers.defaultRoute);
app.listen(process.env.PORT || 3030);
