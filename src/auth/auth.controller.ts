import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { loginAuthDto } from './dto/loginAuthdto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signUp')
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('signin')
  login(@Body() loginAuthdto:loginAuthDto){
    return this.authService.loginService(loginAuthdto)
  }

  
  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.authService.findOne(email);
  }

  @Put(':email')
  update(@Param('email') email: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(email, updateAuthDto);
  }

  @Delete(':email')
  remove(@Param('email') email: string) {
    return this.authService.remove(email);
  }
}
