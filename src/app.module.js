import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BubbleModule } from './bubble/bubble.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BubbleModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
