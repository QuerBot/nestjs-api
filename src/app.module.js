import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BubbleModule } from './bubble/bubble.module';
import { UserModule } from './user/user.module';
import { TweetModule } from './tweet/tweet.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BubbleModule, UserModule, TweetModule],
})
export class AppModule {}
