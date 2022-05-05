const { TweetController } = require('./tweet.module');

var EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
  name: 'Tweet',
  target: Tweet,
  columns: {
    tweetID: {
      type: 'bigint',
    },
    answered: {
      type: 'boolean',
      default: false,
    },
  },
});
