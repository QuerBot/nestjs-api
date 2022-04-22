import { Module } from '@nestjs/common';
import { BubbleController } from './bubble.controller';
import { BubbleService } from './bubble.service';

@Module({
  controllers: [BubbleController],
  providers: [BubbleService]
})
export class BubbleModule {}
