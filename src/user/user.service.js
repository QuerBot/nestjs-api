import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import Bubble from '../bubble/bubble.entity';
import User from './user.entity';

@Injectable()
@Dependencies(getRepositoryToken(User), getRepositoryToken(Bubble))
export class UserService {
  constructor(userRepository, bubbleRepository) {
    this.userRepository = userRepository;
    this.bubbleRepository = bubbleRepository;
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

  async addUserToBubble(id, bubbleId) {
    const user = await this.userRepository.findOne({ id });
    const bubble = await this.bubbleRepository.findOne({ id: bubbleId });
    user.bubble.push(bubble);
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

  async deleteUser(id) {
    return await this.userRepository.delete({
      id: id,
    });
  }
  async deleteUserFromBubble(id, bubbleId) {
    const user = await this.userRepository.findOne({ id });
    user.bubble = user.bubble.filter(item => item.id !== bubbleId);
    return await this.userRepository.save(user);
  }
}
