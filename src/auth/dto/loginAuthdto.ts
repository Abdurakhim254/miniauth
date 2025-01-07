import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MinLength, IsStrongPassword } from 'class-validator';
export class loginAuthDto {
  @ApiProperty({
    type: String,
    description: 'Email should be write this place',
  })
  @IsEmail()
  email: string;
  @ApiProperty({
    type: String,
    description: 'Password should be strong minimum length of password 5',
  })
  @IsStrongPassword()
  @MinLength(5)
  password: string;
}
