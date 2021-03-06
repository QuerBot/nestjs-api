var EntitySchema = require('typeorm').EntitySchema;
var Tweet = require('./tweet.model').Tweet;
var User = require('../user/user.model').User;

module.exports = new EntitySchema({
  name: 'Tweet',
  target: Tweet,
  columns: {
    tweetID: {
      primary: true,
      type: 'bigint',
    },
    answered: {
      type: 'int',
      default: 0,
    },
  },
  relations: {
    requestedUser: {
      type: 'many-to-one',
      target: 'User',
      joinTable: true,
    },
  },
});
