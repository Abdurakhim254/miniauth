import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsNumber,
  MinLength,
  Min,
  IsStrongPassword,
} from 'class-validator';
export class CreateAuthDto {
  @ApiProperty({
    type:String,
    description:"Name",
    minLength:3
  })
  @IsString()
  @MinLength(3)
  name: string;
  @ApiProperty({
    type:String,
    description:"Familya",
    minLength:3
  })
  @IsString()
  @MinLength(3)
  familya: string;
  @ApiProperty({
    type:Number,
    description:"age",
    minimum:10
  })
  @IsNumber()
  @Min(10)
  age: number;
  @ApiProperty({
    type:String,
    description:"Email"
  })
  @IsEmail()
  email: string;
  @ApiProperty({
    type:String,
    description:"Password should be strong"
  })
  @IsStrongPassword()
  @MinLength(5)
  password: string;
}
