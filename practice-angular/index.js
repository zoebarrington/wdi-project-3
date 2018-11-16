const express = require('express');
const app = express();
const env = require('./config/environment');
const mongoose = require('mongoose');

mongoose.connect(env.dbUri);
const router = require('./config/router');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', router);
