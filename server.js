const express = require('express');
const bookHandlers = require('./handlers/bank.handler');

const app = express();

app.get('/ifsc/:ifsc', bookHandlers.findByIFSC);
app.get('/bank/:bank/:city', bookHandlers.findByBankAndCity);
app.listen(process.env.PORT || 3030);
