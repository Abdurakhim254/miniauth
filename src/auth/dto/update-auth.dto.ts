import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateAuthDto extends PartialType(CreateAuthDto) {
  @ApiProperty({
    type:String,
    description:"Optional"
  })
  name?: string;
  @ApiProperty({
    type:String,
    description:"Optional"
  })
  familya?: string;
  @ApiProperty({
    type:Number,
    description:"Optional"
  })
  age?: number;
  @ApiProperty({
    type:String,
    description:"Optional"
  })
  password?: string;
}
