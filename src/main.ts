import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //default ela vem a 3000
  await app.listen(3333);
}
bootstrap();
