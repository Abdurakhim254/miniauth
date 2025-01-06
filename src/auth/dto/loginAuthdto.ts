import {
    IsEmail,
    MinLength,
    IsStrongPassword,
  } from 'class-validator';
  export class loginAuthDto {
    @IsEmail()
    email: string;
    @IsStrongPassword()
    @MinLength(5)
    password: string;
  }
  