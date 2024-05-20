import {
  LoginUserModel,
  RegisterUserModel,
  ResetPasswordModel,
  UserEmailModel,
} from '../models/user.model';

export const candidate1: LoginUserModel = {
  userEmail: process.env.USER_EMAIL ?? '[NOT SET]',
  userPassword: process.env.USER_PASSWORD ?? '[NOT SET]',
};

export const candidate2: LoginUserModel = {
  userEmail: process.env.USER_EMAIL_2 ?? '[NOT SET]',
  userPassword: process.env.USER_PASSWORD_2 ?? '[NOT SET]',
};

export const testUser1: RegisterUserModel = {
  userEmail: process.env.USER_EMAIL ?? '[NOT SET]',
  userPassword: process.env.USER_PASSWORD ?? '[NOT SET]',
  repeatPassword: process.env.USER_PASSWORD ?? '[NOT SET]',
};

export const testUser2: RegisterUserModel = {
  userEmail: process.env.USER_EMAIL_2 ?? '[NOT SET]',
  userPassword: process.env.USER_PASSWORD_2 ?? '[NOT SET]',
  repeatPassword: process.env.USER_PASSWORD_2 ?? '[NOT SET]',
};

export const dataOfPassword: ResetPasswordModel = {
  currentPassword: process.env.USER_PASSWORD ?? '[NOT SET]',
  newPassword: process.env.USER_NEWPASSWORD ?? '[NOT SET]',
  repeatNewPassword: process.env.USER_NEWPASSWORD ?? '[NOT SET]',
};

export const candidateEmail: UserEmailModel = {
  userEmail: process.env.USER_EMAIL ?? '[NOT SET]',
};
