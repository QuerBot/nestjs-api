class User {
  constructor(id, handle, lastCheck, rating, bubble, follows) {
    this.id = id;
    this.handle = handle;
    this.lastCheck = lastCheck;
    this.rating = rating;
    this.bubble = bubble;
    this.follows = follows;
  }
}

module.exports = {
  User: User,
};
