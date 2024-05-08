export interface LoginUserModel {
  userEmail: string;
  userPassword: string;
}

export interface RegisterUserModel {
  userEmail: string;
  userPassword: string;
  repeatPassword: string;
}

export interface ResetPasswordModel {
  currentPassword: string;
  newPassword: string;
  repeatNewPassword: string;
}

export interface UserEmailModel {
  emailAddress: string;
}
