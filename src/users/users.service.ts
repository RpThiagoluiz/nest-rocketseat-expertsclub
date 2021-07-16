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
    const currentMaxId = this.users[this.users.length - 1]?.id  || 0 //somente para gerar um id, de acordo com o 
    //caso nao achei o nullsafe, traz ele como zero
    const id = currentMaxId + 1
    
    //ultimo criado
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
    const user = this.findOne(id)
    //combinar os dados do usuario com os dados update
    //A ordem importa, q ele vai substituir as coisas novas que vierem.
    const newUser:User = {
      ...user,
      ...updateUserDto
    }

    const indexUser = this.users.indexOf(user)
    this.users[indexUser] = newUser

    return newUser
   // return `This action updates a #${id} user`;
  }

  remove(id: number) {
    const user = this.findOne(id)
    const index = this.users.indexOf(user)
    //splice recebe index para iniciar
    this.users.splice(index,1)
    //return `This action removes a #${id} user`;
  }
}
