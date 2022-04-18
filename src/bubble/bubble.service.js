import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import generateId from '../util/helper/generadeId';
import Bubble from './bubble.entity';

@Injectable()
@Dependencies(getRepositoryToken(Bubble))
export class BubbleService {
  constructor(bubbleRepository) {
    this.bubbleRepository = bubbleRepository;
  }
  async getBubble() {
    return await this.bubbleRepository.find();
  }

  async getBubbleById(id) {
    return await this.bubbleRepository.find({
      where: {
        id: id,
      },
    });
  }

  async getBubbleMembers(id) {
    return 'TODO: getBubbleMembers';
  }

  async getBubbleMostFollowedUsers() {
    return 'TODO: getBubbleMostFollowedUsers';
  }

  async postBubble(name, description) {
    let id = await generateId(this.bubbleRepository, name);
    return await this.bubbleRepository.save({
      id: id,
      name: name,
      description: description,
    });
  }

  async updateBubble(id, updates) {
    return await this.bubbleRepository.update(id, updates);
  }

  async deleteBubble(id) {
    return await this.bubbleRepository.delete({
      id: id,
    });
  }
}
