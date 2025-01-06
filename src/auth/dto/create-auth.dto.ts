import {
  IsString,
  IsEmail,
  IsNumber,
  MinLength,
  Min,
  IsStrongPassword,
} from 'class-validator';
export class CreateAuthDto {
  @IsString()
  @MinLength(3)
  name: string;
  @IsString()
  @MinLength(3)
  familya: string;
  @IsNumber()
  @Min(10)
  age: number;
  @IsEmail()
  email: string;
  @IsStrongPassword()
  @MinLength(5)
  password: string;
}
