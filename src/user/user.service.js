import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import User from './user.entity';

@Injectable()
@Dependencies(getRepositoryToken(User))
export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getUser() {
    return await this.userRepository.find();
  }

  async getUserbyId(id) {
    return await this.userRepository.find({
      where: {
        id: id,
      },
    });
  }

  async getUserFollowings() {
    return 'TODO: getUserFollowings';
  }

  async getUserFollowers() {
    return 'TODO: getUserFollowers';
  }

  async getUserHandle(id) {
    let user = await this.userRepository.findOne({ id });
    return user.handle;
  }

  async postUser(user) {
    return await this.userRepository.save(user);
  }

  async updateUser(id, user) {
    return await this.userRepository.update(id, user);
  }

  async updateUserFollowings() {
    return 'TODO: updateUserFollowings';
  }

  async updateUserFollowers() {
    return 'TODO: updateUserFollowers';
  }

  async updateBubbleMembership() {
    return 'TODO: updateBubbleMembership';
  }

  async deleteUser(id) {
    return await this.userRepository.delete({
      id: id,
    });
  }
}
