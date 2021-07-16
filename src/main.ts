import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //pipes para cvalidacao
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, //por padrao os parametros de rotas vem como string,
      whitelist:true,//obj extras nao passem
      forbidNonWhitelisted:true, //error quando vc mandar algo que nao esteja esperando
    })
  )



  //default ela vem a 3000
  await app.listen(3333);
}
bootstrap();
