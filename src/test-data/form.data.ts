import {
  MatchingModel,
  NameOfCompanyModel,
  PersonalInfoModel,
  ProfileLinksModel,
  SendMessageModel,
} from '../models/form.model';

export const messageOnLiveChat: SendMessageModel = {
  userName: 'Monika',
  userEmail: process.env.USER_EMAIL ?? '[NOT SET]',
  subject: 'Matching',
  message: 'Co mogę zyskać w matchingu?',
};

export const companyData: NameOfCompanyModel = {
  companyName: 'Zero',
};

export const candidateInformation: PersonalInfoModel = {
  name: 'Monika',
  surname: 'Testowa',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum ante quam, nec pulvinar augue volutpat non. Nulla facilisi. Quisque bibendum est sit amet velit malesuada feugiat. Praesent dapibus fermentum lorem eu sodales. Duis eget euismod tortor, vitae placerat nunc. Etiam mattis tellus vitae leo facilisis, vel imperdiet lorem porttitor. Aenean in sapien in urna suscipit interdum ac non massa. In eu rhoncus mauris. Sed rhoncus finibus ipsum, nec dignissim dui consectetur vel. Nulla venenatis et erat eu tempor. Vivamus eget pellentesque nulla. Etiam bibendum, lacus in sodales bibendum, nulla velit auctor arcu, eu efficitur ipsum felis in ligula. Fusce urna justo, gravida sit amet accumsan at, consectetur at quam. Nulla ut porttitor enim, tincidunt commodo arcu. Praesent semper, nulla in tincidunt ultricies, mi felis elementum nibh, at euismod mauris tellus sit amet dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius, sapien id sollicitudin gravida.',
};

export const candidateName: MatchingModel = {
  name: 'Monika',
  surname: 'Testowa',
};

export const linksToProfiles: ProfileLinksModel = {
  linkedin: 'https://www.linkedin.com/in/monika-jakubowska-3687b81a2/',
  github: 'https://github.com/MJakubowska359',
};
