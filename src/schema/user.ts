import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: String, minlength: 3, required: true })
  name: string;

  @Prop({ type: String, minlength: 3, required: true })
  familya: string;

  @Prop({ type: Number, min: 10, required: true })
  age: number;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
