import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import User from './user.entity';
import Bubble from '../bubble/bubble.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Bubble])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
