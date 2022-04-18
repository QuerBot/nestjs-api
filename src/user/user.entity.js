var EntitySchema = require('typeorm').EntitySchema;
var User = require('./user.model').User;

module.exports = new EntitySchema({
  name: 'User',
  target: User,
  columns: {
    id: {
      primary: true,
      type: 'int',
    },
    handle: {
      type: 'varchar',
    },
    lastCheck: {
      type: 'datetime',
      default: () => 'NOW()',
    },
    rating: {
      type: 'int',
    },
  },
});
