class Tweet {
  constructor(tweetID, answered, senderID, requestedUser) {
    this.tweetID = tweetID;
    this.answered = answered;
    this.senderID = senderID;
    this.requestedUser = requestedUser;
  }
}

module.exports = {
  Tweet: Tweet,
};
