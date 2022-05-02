import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import generateId from '../util/helper/generateId';
import Bubble from './bubble.entity';
import User from '../user/user.entity';

@Injectable()
@Dependencies(getRepositoryToken(Bubble), getRepositoryToken(User))
export class BubbleService {
  constructor(bubbleRepository, userRepository) {
    this.bubbleRepository = bubbleRepository;
    this.userRepository = userRepository;
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

  async getBubbleByName(name) {
    return await this.bubbleRepository.find({
      where: {
        name: name,
      },
    });
  }

  async getBubbleMembers(id) {
    return await this.userRepository.query(
      ` SELECT *
        FROM user U
        WHERE U.id IN (
            SELECT Ubb.userId
            FROM user_bubble_bubble Ubb
            WHERE Ubb.bubbleId = "${id}"
            );  `,
    );
  }

  async getBubbleMostFollowedUsers(id, count) {
    return await this.userRepository.query(
      `SELECT userId_2, Count(userId_2) 
      FROM user_follows_user 
      WHERE userId_2 
      IN(
          SELECT userId 
          FROM user_bubble_bubble
          WHERE bubbleId = '${id}'
          AND userId 
          IN (
              SELECT userId_2 
              FROM user_follows_user 
              GROUP BY userId_2 
          )
      ) 
      GROUP BY userId_2
      ORDER BY Count(userId_2) DESC
      LIMIT ${count};`,
    );
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
