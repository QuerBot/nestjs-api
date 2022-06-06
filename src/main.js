import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');

  const appPort = process.env.APP_PORT || process.env.PORT || 3000;
  await app.listen(appPort);
  logger.log(`App listening on port ${appPort}`);
}
bootstrap();
