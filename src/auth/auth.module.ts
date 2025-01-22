import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schema/user';
import { LocalStrategy } from './strategy/strategy';
import {PassportModule} from "@nestjs/passport"



@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule
  ],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy],
})



export class AuthModule {}
