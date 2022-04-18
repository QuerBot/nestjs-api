import {
  Controller,
  Dependencies,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Bind,
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

  @Get(':id/members')
  getBubbleMembers() {
    return this.bubbleService.getBubbleMembers();
  }

  @Get(':id/mostFollowed')
  getBubbleMostFollowedUsers() {
    return this.bubbleService.getBubbleMostFollowedUsers();
  }

  @Post()
  @Bind(Body())
  postBubble(body) {
    return this.bubbleService.postBubble(body.name, body.description);
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
