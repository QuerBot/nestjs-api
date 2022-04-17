import {
  Controller,
  Dependencies,
  Get,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
@Dependencies(UserService)
export class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  @Get()
  getUser() {
    return this.userService.getUser();
  }

  @Get(':id')
  getUserById() {
    return this.userService.getUserbyId();
  }

  @Get(':id/followings')
  getUserFollowings() {
    return this.userService.getUserFollowings();
  }

  @Get(':id/followers')
  getUserFollowers() {
    return this.userService.getUserFollowers();
  }

  @Get(':id/handle')
  getUserHandle() {
    return this.userService.getUserHandle();
  }

  @Post()
  postUser() {
    return this.userService.postUser();
  }

  @Patch(':id')
  updateUser() {
    return this.userService.updateUser();
  }

  @Patch(':id/followings')
  updateUserFollowings() {
    return this.userService.updateUserFollowings();
  }

  @Patch(':id/followers')
  updateUserFollowers() {
    return this.userService.updateUserFollowers();
  }

  @Patch(':id/handle')
  updateUserHandle() {
    return this.userService.updateUserHandle();
  }

  @Delete()
  deleteUser() {
    return this.userService.deleteUser();
  }
}
