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
import { UserService } from './user.service';

@Controller('user')
@Dependencies(UserService)
export class UserController {
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
  async getUserFollowings() {
    return await this.userService.getUserFollowings();
  }

  @Get(':id/followers')
  async getUserFollowers() {
    return await this.userService.getUserFollowers();
  }

  @Get(':id/handle')
  @Bind(Param('id'))
  async getUserHandle(id) {
    return await this.userService.getUserHandle(id);
  }

  @Post()
  @Bind(Body())
  async postUser(body) {
    if (Object.keys(body).length !== 0) {
      return await this.userService.postUser(body);
    }
    throw new BadRequestException('Missing Body');
  }

  @Post(':id/addToBubble')
  @Bind(Param('id'), Body())
  async addUserToBubble(id, body) {
    if (Object.keys(body).length !== 0) {
      return await this.userService.addUserToBubble(id, body.id);
    }
    throw new BadRequestException('Missing Body');
  }

  @Patch(':id')
  @Bind(Param('id'), Body())
  async updateUser(id, body) {
    if (Object.keys(body).length !== 0) {
      return await this.userService.updateUser(id, body);
    }
    throw new BadRequestException('Missing Body');
  }

  @Patch(':id/followings')
  async updateUserFollowings() {
    return await this.userService.updateUserFollowings();
  }

  @Patch(':id/followers')
  async updateUserFollowers() {
    return await this.userService.updateUserFollowers();
  }

  @Delete(':id')
  @Bind(Param('id'))
  async deleteUser(id) {
    return await this.userService.deleteUser(id);
  }

  @Delete(':id/bubble')
  @Bind(Param('id'), Body())
  async deleteUserFromBubble(id, body) {
    if (Object.keys(body).length !== 0) {
      return await this.userService.deleteUserFromBubble(id, body.id);
    }
    throw new BadRequestException('Missing Body');
  }
}
