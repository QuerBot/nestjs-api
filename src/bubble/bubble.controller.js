import {
  Controller,
  Dependencies,
  Get,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { BubbleService } from './bubble.service';

@Controller('bubble')
@Dependencies(BubbleService)
export class BubbleController {
  constructor(bubbleService) {
    this.bubbleService = bubbleService;
  }

  @Get()
  getBubble() {
    return this.bubbleService.getBubble();
  }

  @Get(':id')
  getBubbleById() {
    return this.bubbleService.getBubbleById();
  }

  @Post()
  postBubble() {
    return this.bubbleService.postBubble();
  }

  @Patch()
  updateBubble() {
    return this.bubbleService.updateBubble();
  }

  @Delete()
  deleteBubble() {
    return this.bubbleService.deleteBubble();
  }
}
