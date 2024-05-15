import { NameOfCompanyModel, SendMessageModel } from '../models/form.model';

export const messageOnLiveChat: SendMessageModel = {
  userName: 'Monika',
  userEmail: process.env.USER_EMAIL ?? '[NOT SET]',
  subject: 'Matching',
  message: 'Co mogę zyskać w matchingu?',
};

export const companyData: NameOfCompanyModel = {
  companyName: 'Zero',
};
