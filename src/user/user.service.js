import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import generateDate from '../util/helper/generateDate';
import Bubble from '../bubble/bubble.entity';
import User from './user.entity';

@Injectable()
@Dependencies(getRepositoryToken(User), getRepositoryToken(Bubble), Connection)
export class UserService {
  constructor(userRepository, bubbleRepository, connection) {
    this.userRepository = userRepository;
    this.bubbleRepository = bubbleRepository;
    this.connection = connection;
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

  async getUserFollowings(id) {
    return await this.userRepository.query(
      ` SELECT * 
        FROM user U
        WHERE U.id <> ${id}
          AND EXISTS(
            SELECT 1
            FROM user_follows_user F
            WHERE (F.userId_1 = ${id} AND F.userId_2 = U.id )
            );  `,
    );
  }

  async getUserFollowers(id) {
    return await this.userRepository.query(
      `SELECT * 
        FROM user U
        WHERE U.id <> ${id}
          AND EXISTS(
            SELECT 1
            FROM user_follows_user F
            WHERE (F.userId_2 = ${id} AND F.userId_1 = U.id )
            );`,
    );
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

  async updateUserFollowers(id, body) {
    await this.connection
      .createQueryBuilder()
      .delete()
      .from('user_follows_user')
      .where('userId_2 = :id', { id: id })
      .execute();
    const newFollower = [];
    for (const follower of body) {
      let followObj = {};
      followObj.userId_1 = follower.id;
      followObj.userId_2 = id;
      newFollower.push(followObj);
    }
    await this.updateUser(id, await generateDate());
    return await this.connection
      .createQueryBuilder()
      .insert()
      .into('user_follows_user')
      .values(newFollower)
      .execute();
  }

  async updateUserFollowings(id, body) {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.id = :id', { id: id })
      .leftJoinAndSelect('user.follows')
      .getOne();
    user.follows = [];
    await this.userRepository.save(user);
    for (const userFollows of body) {
      user.follows.push(userFollows);
    }
    return await this.userRepository.save(user);
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
