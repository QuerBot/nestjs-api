import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import User from './user.entity';

@Injectable()
@Dependencies(getRepositoryToken(User))
export class UserService {
  constructor(userRespository) {
    this.userRespository = userRespository;
  }
  getUser() {
    return 'TODO: getUser';
  }

  getUserbyId() {
    return 'TODO: getUserById';
  }

  getUserFollowings() {
    return 'TODO: getUserFollowings';
  }

  getUserFollowers() {
    return 'TODO: getUserFollowers';
  }

  getUserHandle() {
    return 'TODO: getUserHandle';
  }

  postUser() {
    return 'TODO: postUser';
  }

  updateUser() {
    return 'TODO: updateUser';
  }

  updateUserFollowings() {
    return 'TODO: updateUserFollowings';
  }

  updateUserFollowers() {
    return 'TODO: updateUserFollowers';
  }

  updateUserHandle() {
    return 'TODO: updateUserHandle';
  }

  updateBubbleMembership() {
    return 'TODO: updateBubbleMembership';
  }

  deleteUser() {
    return 'TODO: deleteUser';
  }
}
