var EntitySchema = require('typeorm').EntitySchema;
var User = require('./user.model').User;
var Bubble = require('../bubble/bubble.model').Bubble;

module.exports = new EntitySchema({
  name: 'User',
  target: User,
  columns: {
    id: {
      primary: true,
      type: 'bigint',
    },
    handle: {
      type: 'varchar',
    },
    lastChanged: {
      type: 'datetime',
      default: () => 'NOW()',
    },
    lastCheck: {
      type: 'datetime',
      default: () => 'NOW()',
    },
    rating: {
      type: 'int',
    },
  },
  relations: {
    bubble: {
      type: 'many-to-many',
      target: 'Bubble',
      joinTable: true,
      cascade: true,
      eager: true,
    },
    follows: {
      type: 'many-to-many',
      target: 'User',
      joinTable: true,
    },
    tweets: {
      type: 'one-to-many',
      target: 'Tweet',
      joinTable: true,
    },
  },
});
