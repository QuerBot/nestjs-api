class Tweet {
  constructor(tweetID, answered, senderID, user) {
    this.tweetID = tweetID;
    this.answered = answered;
    this.senderID = senderID;
    this.user = user;
  }
}

module.exports = {
  Tweet: Tweet,
};
