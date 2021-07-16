import { User } from "../entities/user.entity";

//Algumas infomarcoes quando vc vai gerar um usuario novo nao precisa vir, ela vai ser gerada automaticamente.
//Validar que nao vai vim o id
export class CreateUserDto extends User {
  name:string;
  email?:string;
}
