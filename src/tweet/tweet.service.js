import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import Tweet from './tweet.entity';

@Injectable()
@Dependencies(getRepositoryToken(Tweet))
export class TweetService {
  constructor(tweetRepository) {
    this.tweetRepository = tweetRepository;
  }
}
