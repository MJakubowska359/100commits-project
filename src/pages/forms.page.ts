/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { SendMessageModel } from '../models/form.model';
import { UserEmailModel } from '../models/user.model';
import { faker } from '@faker-js/faker/locale/pl';
import { Page } from '@playwright/test';

export class FormsPage {
  constructor(private page: Page) {}

  emailInput = this.page.getByPlaceholder('name@domain.com');

  // raport.justjoin.it
  emailInputOnSignInPage = this.page.getByPlaceholder('forexample@domain.com');
  nameAndSurnameBtn = this.page.getByLabel('Imię i nazwisko');
  whoAreYou = this.page.getByPlaceholder('Wybierz jedną z opcji');
  // termsCheckbox = this.page.getByRole('checkbox', { name: 'zgoda1' });

  termsCheckbox = this.page.getByRole('checkbox', { name: 'policy' });

  downloadReportBtn = this.page.getByRole('button', {
    name: 'POBIERZ RAPORT',
  });

  // post a job form
  // fullNameField = this.page.locator('input[type=text]');
  // contactEmailField = this.page.locator('input[type=email]');
  // phoneField = this.page.locator('input[type=tel]');

  fullNameField = this.page
    .frameLocator('iframe[title="pipedrive-contact-form"]')
    .getByLabel('Full name');
  contactEmailField = this.page
    .frameLocator('iframe[title="pipedrive-contact-form"]')
    .getByLabel('Contact e-mail');
  phoneField = this.page
    .frameLocator('iframe[title="pipedrive-contact-form"]')
    .getByLabel('Phone number');

  sendBtn = this.page.getByRole('button', { name: 'Send' });

  // openChatBtn = this.page.frameLocator('iframe[name="chat-widget-minimized"]').getByLabel('Open LiveChat chat widget').click();
  leaveAMessageBtn = this.page
    .frameLocator('iframe[name="chat-widget"]')
    .getByRole('button', { name: 'Leave a message' });

  nameField = this.page
    .frameLocator('iframe[name="chat-widget"]')
    .getByLabel('Your name:');
  emailField = this.page
    .frameLocator('iframe[name="chat-widget"]')
    .getByLabel('E-mail:');
  subjectField = this.page
    .frameLocator('iframe[name="chat-widget"]')
    .getByLabel('Subject:');
  messageField = this.page
    .frameLocator('iframe[name="chat-widget"]')
    .getByLabel('Message:');
  openMenu = this.page
    .frameLocator('iframe[name="chat-widget"]')
    .getByLabel('Open menu');
  minimizeWindow = this.page
    .frameLocator('iframe[name="chat-widget"]')
    .getByLabel('Minimize window');
  leaveMessageBtn = this.page
    .frameLocator('iframe[name="chat-widget"]')
    .getByRole('button', { name: 'Leave a message' });

  // subscribe offers
  defaultFrequency = this.page.getByLabel('Twice a week (Monday, Thursday');
  everydayFrequency = this.page.getByRole('option', { name: 'Everyday' });
  oneAMonthFrequency = this.page.getByRole('option', { name: 'Once a week' });
  nameOfNotification = this.page.getByLabel('Name of notification*');
  addNotificationBtn = this.page.getByRole('button', {
    name: 'Add notification',
  });
  acceptTermsCheckbox = this.page.getByRole('checkbox', {
    name: "I confirm that I've read and I agree to the site's Terms & Conditions and Privacy Policy.",
  });

  async fillFormToDownloadReport() {
    await this.nameAndSurnameBtn.fill('');
    await this.emailInputOnSignInPage.fill('');
    await this.whoAreYou.selectOption('');
    await this.termsCheckbox.check();
    // await this.downloadReportBtn.click()

    // await page1.getByLabel('Imię i nazwisko').click();
    // await page1.getByLabel('E-mail*').click();
    // await page1.getByLabel('Zgadzam się na przetwarzanie').check();
    // await page1.getByRole('button', { name: 'POBIERZ RAPORT' }).click();
    // await page1.getByText('Wymagane').first().click();
    // await page1.getByText('Wymagane').first().click();
    // await page1.getByText('Wymagane').click();
  }

  async fillEmailField(userEmail: UserEmailModel): Promise<void> {
    await this.emailInputOnSignInPage.fill(userEmail.userEmail);
  }

  async clickEveryFieldAndstayItEmpty() {
    await this.nameField.press('Tab');
    await this.emailInputOnSignInPage.press('Tab');
    await this.subjectField.press('Tab');
    await this.messageField.press('Tab');
  }

  async clickLeaveAMessageBtnAndFillFormToSendMessage(
    messageOnLiveChat: SendMessageModel,
  ): Promise<void> {
    await this.leaveAMessageBtn.click();
    await this.nameField.fill(messageOnLiveChat.userName);
    await this.emailField.fill(messageOnLiveChat.userEmail);
    await this.subjectField.fill(messageOnLiveChat.subject);
    await this.messageField.fill(messageOnLiveChat.message);
    await this.leaveMessageBtn.click();
  }

  async fillFormToLearnDetailsAdvertisementsOfJobs() {
    await this.fullNameField.fill('');
    await this.contactEmailField.fill('');
    await this.phoneField.fill('');
    // await this.sendBtn.click();
  }

  async fillEmailAddressToResetPassword(
    candidateData: UserEmailModel,
  ): Promise<void> {
    await this.emailInput.fill(candidateData.userEmail);
  }

  async chooseOptionsForSubscribeOffers() {
    const randomEmail = faker.internet.email();
    await this.emailInputOnSignInPage.fill(randomEmail);
    await this.defaultFrequency.click();
    await this.everydayFrequency.click();
    await this.nameOfNotification.fill('Oferty dla pythonowca');
    await this.acceptTermsCheckbox.check();
    await this.addNotificationBtn.click();
  }
}
