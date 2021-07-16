import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity'; 
//foi criada auto. E a entidade é responsavel por armazenar os tipos de variaveis que vc vai querer.

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: "Thiago luiz",
      email: "nothave@gmail.com"
    }
  ]

//createUserDto - pega uma info e transfere para outro local.
// e vc pode relacionar ele com a entendidade, extendedo ele a class que vc quer.
  create(createUserDto: CreateUserDto) {
    //lembra no createUserDto, ele nao tem id, geralmente bancos de dados ja trazem
    const id = this.users[this.users.length - 1].id + 1 //somente para gerar um id, de acordo com o ultimo criado
    //validar o usuario
    const user: User = {
      id,
      ...createUserDto
    }
    this.users.push(user)
   // default - return 'This action adds a new user';
   return user
  }

  findAll() {
    //return `This action returns all users`;
    return this.users
  }

  findOne(id: number) {
    //return `This action returns a #${id} user`;
    return this.users.find(user => user.id === id)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
