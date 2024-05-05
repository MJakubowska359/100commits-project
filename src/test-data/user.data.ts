import {
  LoginUserModel,
  RegisterUserModel,
  ResetPasswordModel,
} from '../models/user.model';

export const testUser1: RegisterUserModel = {
  userEmail: process.env.USER_EMAIL ?? '[NOT SET]',
  userPassword: process.env.USER_PASSWORD ?? '[NOT SET]',
  repeatPassword: process.env.USER_PASSWORD ?? '[NOT SET]',
};

export const candidate1: LoginUserModel = {
  userEmail: process.env.USER_EMAIL ?? '[NOT SET]',
  userPassword: process.env.USER_PASSWORD ?? '[NOT SET]',
};

export const dataOfPassword: ResetPasswordModel = {
  currentPassword: process.env.USER_PASSWORD ?? '[NOT SET]',
  newPassword: process.env.USER_NEWPASSWORD ?? '[NOT SET]',
  repeatNewPassword: process.env.USER_NEWPASSWORD ?? '[NOT SET]',
};
