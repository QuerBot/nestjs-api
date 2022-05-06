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
}
