class User {
  constructor(id, handle, lastCheck, rating, bubble) {
    this.id = id;
    this.handle = handle;
    this.lastCheck = lastCheck;
    this.rating = rating;
    this.bubble = bubble;
  }
}

module.exports = {
  User: User,
};
