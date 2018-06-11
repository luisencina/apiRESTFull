'use strict'

/*se importa express*/
const express = require('express');
/*se importa body-parser*/
const bodyParser = require('body-parser');

const app = express();

const api = require('./routes/index');


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use('/api',api);

module.exports = app;