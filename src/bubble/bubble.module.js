import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BubbleController } from './bubble.controller';
import { BubbleService } from './bubble.service';
import Bubble from './bubble.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bubble])],
  controllers: [BubbleController],
  providers: [BubbleService],
})
export class BubbleModule {}
