import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BubbleController } from './bubble.controller';
import { BubbleService } from './bubble.service';
import Bubble from './bubble.entity';
import User from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bubble, User])],
  controllers: [BubbleController],
  providers: [BubbleService],
})
export class BubbleModule {}
