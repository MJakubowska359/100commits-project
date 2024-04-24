import { RegisterUserModel } from '../models/user.model';

export const testUser1: RegisterUserModel = {
  userEmail: process.env.USER_EMAIL ?? '[NOT SET]',
  userPassword: process.env.USER_PASSWORD ?? '[NOT SET]',
  repeatPassword: process.env.USER_PASSWORD ?? '[NOT SET]',
};
