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
}
