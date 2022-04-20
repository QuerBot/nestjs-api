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
import { BubbleService } from './bubble.service';

@Controller('bubble')
@Dependencies(BubbleService)
export class BubbleController {
  constructor(bubbleService) {
    this.bubbleService = bubbleService;
  }

  @Get()
  async getBubble() {
    return await this.bubbleService.getBubble();
  }

  @Get(':id')
  @Bind(Param('id'))
  async getBubbleById(id) {
    return await this.bubbleService.getBubbleById(id);
  }

  @Get(':id/members')
  @Bind(Param('id'))
  async getBubbleMembers(id) {
    return await this.bubbleService.getBubbleMembers(id);
  }

  @Get(':id/mostFollowed')
  async getBubbleMostFollowedUsers() {
    return await this.bubbleService.getBubbleMostFollowedUsers();
  }

  @Post()
  @Bind(Body())
  async postBubble(body) {
    return await this.bubbleService.postBubble(body.name, body.description);
  }

  @Patch(':id')
  @Bind(Param('id'), Body())
  async updateBubble(id, body) {
    if (Object.keys(body).length !== 0) {
      return await this.bubbleService.updateBubble(id, body);
    }
    throw new BadRequestException('Empty Body');
  }

  @Delete(':id')
  @Bind(Param('id'))
  async deleteBubble(id) {
    return await this.bubbleService.deleteBubble(id);
  }
}
