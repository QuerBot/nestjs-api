import { Logger, Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import Tweet from './tweet.entity';

@Injectable()
@Dependencies(getRepositoryToken(Tweet))
export class TweetService {
  logger = new Logger(TweetService.name);

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
      relations: ['requestedUser'],
    });
  }

  async getTweetById(id) {
    return await this.tweetRepository.findOne({
      where: {
        tweetID: id,
      },
      relations: ['requestedUser'],
    });
  }

  async queueTweet(tweets) {
    try {
      await this.tweetRepository.save(tweets);
    } catch (e) {
      this.logger.error(e);
    }
  }

  async tweetInProgress(id) {
    return await this.tweetRepository.update(id, {
      answered: 1,
    });
  }

  async doneTweet(id) {
    return await this.tweetRepository.update(id, {
      answered: 2,
    });
  }
}
