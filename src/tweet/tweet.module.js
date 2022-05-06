import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import Tweet from './tweet.entity';
import User from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tweet, User])],
  controllers: [TweetController],
  providers: [TweetService],
})
export class TweetModule {}
