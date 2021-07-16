import {IsString, IsEmail, IsOptional} from 'class-validator'
import { User } from "../entities/user.entity";

//Algumas infomarcoes quando vc vai gerar um usuario novo nao precisa vir, ela vai ser gerada automaticamente.
//Validar que nao vai vim o id
export class CreateUserDto extends User {
  @IsString()
  name:string;
  @IsEmail()
  @IsOptional()
  email?:string;
}
