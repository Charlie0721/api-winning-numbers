import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {  Logger } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3000);
  const logger=Logger
  logger.log('Server is running on port '+ 3000)
}
bootstrap();
