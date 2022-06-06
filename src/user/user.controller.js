import {
  Logger,
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
import { UserService } from './user.service';

@Controller('user')
@Dependencies(UserService)
export class UserController {
  logger = new Logger(UserController.name);

  constructor(userService) {
    this.userService = userService;
  }

  @Get()
  async getUser() {
    return await this.userService.getUser();
  }

  @Get(':id')
  @Bind(Param('id'))
  async getUserById(id) {
    return await this.userService.getUserbyId(id);
  }

  @Get(':id/followings')
  @Bind(Param('id'))
  async getUserFollowings(id) {
    return await this.userService.getUserFollowings(id);
  }

  @Get(':id/followers')
  @Bind(Param('id'))
  async getUserFollowers(id) {
    return await this.userService.getUserFollowers(id);
  }

  @Get(':id/handle')
  @Bind(Param('id'))
  async getUserHandle(id) {
    return await this.userService.getUserHandle(id);
  }

  @Post()
  @Bind(Body())
  async postUser(body) {
    if (Object.keys(body).length === 0)
      throw new BadRequestException('Missing Body');

    return await this.userService.postUser(body);
  }

  @Post(':id/addToBubble')
  @Bind(Param('id'), Body())
  async addUserToBubble(id, body) {
    if (Object.keys(body).length === 0)
      throw new BadRequestException('Missing Body');

    return await this.userService.addUserToBubble(id, body.id);
  }

  @Patch(':id')
  @Bind(Param('id'), Body())
  async updateUser(id, body) {
    if (Object.keys(body).length === 0)
      throw new BadRequestException('Missing Body');

    return await this.userService.updateUser(id, body);
  }

  @Patch(':id/followers')
  @Bind(Param('id'), Body())
  async updateUserFollowers(id, body) {
    this.logger.debug('UpdatedUserFollowers', body);
    if (Object.keys(body).length === 0)
      throw new BadRequestException('Missing Body');

    return await this.userService.updateUserFollowers(id, body);
  }

  @Patch(':id/followings')
  @Bind(Param('id'), Body())
  async updateUserFollowings(id, body) {
    if (Object.keys(body).length === 0)
      throw new BadRequestException('Missing Body');

    return await this.userService.updateUserFollowings(id, body);
  }

  @Delete(':id')
  @Bind(Param('id'))
  async deleteUser(id) {
    return await this.userService.deleteUser(id);
  }

  @Delete(':id/bubble')
  @Bind(Param('id'), Body())
  async deleteUserFromBubble(id, body) {
    if (Object.keys(body).length === 0)
      throw new BadRequestException('Missing Body');

    return await this.userService.deleteUserFromBubble(id, body.id);
  }
}
