const express = require('express');
const env = require('./config/environment');
const router = require('./config/router');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = env.port;
const app = express();

mongoose.connect(env.dbUri);
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use('/api', router);


app.listen(port, () => console.log(`Express is running on port ${port}`));

module.exports = app;
