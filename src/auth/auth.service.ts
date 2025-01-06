import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User } from 'src/schema/user';
import { Model } from 'mongoose';
import { loginAuthDto } from './dto/loginAuthdto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private Usermodel: Model<User>) {}

  async create(createAuthDto: CreateAuthDto) {
    const {email}=createAuthDto
    const result = await this.Usermodel.findOne({ email });
    if (result) {
      return "Ushbu Foydalanuvchi allaqachon ro'yxatdan o'tgan";
    }
    await this.Usermodel.create(createAuthDto);
    return "Ro'yxatdan o'tdingiz";
  }

  async loginService(loginAuthdto:loginAuthDto) {
    const {email,password}=loginAuthdto
    const result=await this.Usermodel.findOne({email,password})
    if(result){
      return "Login Muvaffaqiyatli amalga oshirildi"
    }
    return "Foydalanuvchi topilmadi"
  }
  async findAll() {
    const result = await this.Usermodel.find();
    if (result.length) return result;
    return 'Foydalanuvchilar topilmadi';
  }

  async findOne(email: string) {
    const result = await this.Usermodel.findOne({ email });
    if (result) return result;
    return 'Foydalanuvchi topilmadi';
  }

  async update(email: string, updateAuthDto: UpdateAuthDto) {
    const result = await this.Usermodel.findOne({ email });
    if (result) {
      await this.Usermodel.updateOne({email},{$set:updateAuthDto});
      return 'Foydalanuvchi yangilandi';
    }
    return 'Yangilanadigan Foydalanuvchi topilmadi';
  }

  async remove(email: string) {
    const result = await this.Usermodel.findOne({ email });
    if (result) {
      await this.Usermodel.deleteOne({ email });
      return "Foydalanuvchi o'chirildi";
    }
    return "O'chiriladigan Foydalanuvchi topilmadi";
  }
}
