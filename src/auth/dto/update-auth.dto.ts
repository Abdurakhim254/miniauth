import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
  name?: string;
  familya?: string;
  age?: number;
  email?: string;
  password?: string;
}
