import crypto from 'crypto';
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
  getBubble() {
    return this.bubbleRepository.find();
  }

  getBubbleById(id) {
    return this.bubbleRepository.find(id);
  }

  getBubbleMembers(id) {
    return 'TODO: getBubbleMembers';
  }

  getBubbleMostFollowedUsers() {
    return 'TODO: getBubbleMostFollowedUsers';
  }

  postBubble(name, description) {
    let id = generateId(this.bubbleRepository, name);
    return this.bubbleRepository.save(
      this.bubbleRepository.create({
        id: id,
        name: name,
        description: description,
      }),
    );
  }

  updateBubble() {
    return 'TODO: updateBubble';
  }

  deleteBubble() {
    return 'TODO: deleteBubble';
  }
}
