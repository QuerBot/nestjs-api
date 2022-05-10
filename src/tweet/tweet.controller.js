import {
  Controller,
  Dependencies,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Bind,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweet')
@Dependencies(TweetService)
export class TweetController {
  constructor(tweetService) {
    this.tweetService = tweetService;
  }

  @Get()
  async getNextTweet() {
    return await this.tweetService.getNextTweet();
  }

  @Post()
  @Bind(Body())
  async queueTweet(body) {
    if (Object.keys(body).length !== 0) {
      return await this.tweetService.queueTweet(body);
    }
    throw new BadRequestException('Missing Body');
  }

  @Patch(':id')
  @Bind(Param('id'))
  async doneTweet(id) {
    return await this.tweetService.doneTweet(id);
  }
}
