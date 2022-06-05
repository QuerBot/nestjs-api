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

  @Get(':id')
  @Bind(Param('id'))
  async getTweetById(id) {
    return await this.tweetService.getTweetById(id);
  }

  @Post()
  @Bind(Body())
  async queueTweet(body) {
    if (Object.keys(body).length === 0)
      throw new BadRequestException('Missing Body');

    return await this.tweetService.queueTweet(body);
  }

  @Patch(':id/inProgress')
  @Bind(Param('id'))
  async tweetInProgress(id) {
    return await this.tweetService.tweetInProgress(id);
  }

  @Patch(':id/done')
  @Bind(Param('id'))
  async doneTweet(id) {
    return await this.tweetService.doneTweet(id);
  }
}
