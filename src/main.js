import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { urlencoded, json } from 'express';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  if (typeof PhusionPassenger !== 'undefined') {
    app.listen('passenger');
  } else {
    app.listen(3000);
  }
  logger.log(`App listening on port ${appPort}`);
}
bootstrap();
