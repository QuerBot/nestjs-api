var EntitySchema = require('typeorm').EntitySchema;
var Bubble = require('./bubble.model').Bubble;
var User = require('../user/user.model').User;

module.exports = new EntitySchema({
  name: 'Bubble',
  target: Bubble,
  columns: {
    id: {
      primary: true,
      type: 'varchar',
    },
    name: {
      type: 'varchar',
    },
    description: {
      type: 'varchar',
    },
  },
});
