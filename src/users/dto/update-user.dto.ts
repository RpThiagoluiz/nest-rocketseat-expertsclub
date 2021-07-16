import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';


//PartialType - CreateUserDto -> ele asume que somente uma chaves vai ser atualizada, exemplo somente o name.
export class UpdateUserDto extends PartialType(CreateUserDto) {}
