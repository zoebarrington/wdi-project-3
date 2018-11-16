const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);
