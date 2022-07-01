if (typeof PhusionPassenger !== 'undefined') {
  PhusionPassenger.configure({ autoInstall: false });
}
require('dotenv').config();
require('@babel/register');
require('./src/main');
