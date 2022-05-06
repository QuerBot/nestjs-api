import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BubbleModule } from './bubble/bubble.module';
import { UserModule } from './user/user.module';
import { TweetModule } from './tweet/tweet.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BubbleModule, UserModule, TweetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
