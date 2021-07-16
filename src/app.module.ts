import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  //controllers do user,vc pode passa aq contudo melhor, seria criar ele aparte encapsulado.
  controllers: [AppController],
  
  providers: [AppService],
})
export class AppModule {}
