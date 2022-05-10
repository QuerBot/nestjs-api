import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import Tweet from './tweet.entity';
import User from '../user/user.entity';

@Injectable()
@Dependencies(getRepositoryToken(Tweet))
export class TweetService {
  constructor(tweetRepository) {
    this.tweetRepository = tweetRepository;
  }

  async getNextTweet() {
    return await this.tweetRepository.findOne({
      where: {
        answered: false,
      },
      order: {
        tweetID: 'ASC',
      },
    });
  }

  async queueTweet(tweet) {
    try {
      await this.tweetRepository.save(tweet);
    } catch (e) {
      console.log(e);
    }
  }

  async doneTweet(id) {
    return await this.tweetRepository.update(id, {
      answered: true,
    });
  }
}
