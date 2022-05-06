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
      type: 'boolean',
      default: false,
    },
    senderID: {
      type: 'bigint',
    },
    relations: {
      requestedUser: {
        type: 'many-to-many',
        target: 'User',
        joinTable: true,
      },
    },
  },
});
