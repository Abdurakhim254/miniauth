import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb+srv://Abduraxim:qwerty123456@mongodb-demo.4gmqf.mongodb.net/test',
    ),
  ],
})
export class AppModule {}
