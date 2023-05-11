'use strict';
require('dotenv').config();
const server = require('./server'); 

// start our server  
server.start(process.env.PORT || 3001 );