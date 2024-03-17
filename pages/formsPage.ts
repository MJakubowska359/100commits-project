import { Page } from "@playwright/test";

export class FormsPage {
    constructor(private page: Page) { }

    // register account
    emailOfRegisterAccountField = this.page.getByPlaceholder('name@domain.com');
    passwordOfRegisterAccountField = this.page.getByPlaceholder('At least 8 characters');
    repeatPasswordField = this.page.getByPlaceholder('Same password as above');
    checkboxConfirmTerms = this.page.getByRole('checkbox').nth(0);
    checkboxCommercialCorrespondence = this.page.getByRole('checkbox').nth(1);
    createAccountBtn = this.page.getByRole('button', {name: 'Create account'});

    //
    emailField = this.page.getByPlaceholder('forexample@domain.com'); // raport.justjoin.it
    passwordBtn = this.page.getByPlaceholder('At least 8 characters');

    // raport.justjoin.it
    nameAndSurnameBtn = this.page.getByLabel('Imię i nazwisko');
    whoAreYou = this.page.getByPlaceholder('Wybierz jedną z opcji');
    // termsCheckbox = this.page.getByRole('checkbox', { name: 'zgoda1' });

    termsCheckbox = this.page.getByRole('checkbox', { name: 'policy' });

    downloadReportBtn = this.page.getByRole('button', { name: 'POBIERZ RAPORT' });

    // justjoin.it/brands - get started option
    firstAndLastNameField = this.page.getByLabel('First name and last name');
    addressEmailField = this.page.getByLabel('Address email');
    companyNameField = this.page.getByLabel('Company name');
    acceptTermsCheckbox = this.page.getByRole('checkbox', {name: 'I accept the terms and conditions of service.'})
    sendARequestBtn = this.page.getByRole('button', {name: 'Send a request'});

    // post a job form
    fullNameField = this.page.getByLabel('Full name');
    contactEmailField = this.page.getByLabel('Contact e-mail');
    phoneField = this.page.getByLabel('Phone number');
    sendBtn = this.page.getByRole('button', { name: 'Send' });

    // openChatBtn = this.page.frameLocator('iframe[name="chat-widget-minimized"]').getByLabel('Open LiveChat chat widget').click();
    nameField = this.page.getByLabel('Your name');
    subjectField = this.page.getByLabel('Subject');
    messageField = this.page.getByLabel('Message');
    openMenu = this.page.getByLabel('Open menu');
    minimizeWindow = this.page.getByLabel('Minimize window');
    leaveMessageBtn = this.page.getByRole('button', { name: 'Leave a message' });

    // checboxy terms/privacy policy and handel informations

    async fillFormToRegisterNewAccount() {
        await this.emailOfRegisterAccountField.fill('');
        await this.passwordOfRegisterAccountField.fill('');
        await this.repeatPasswordField.fill('');
        await this.termsCheckbox.click();
        // await this.createAccountBtn.click();
        }

    async fillFormToDownloadReport() {
        await this.nameAndSurnameBtn.fill('Monika Miś');
        await this.emailField.fill('monikamis@interia.pl');
        await this.whoAreYou.selectOption('Pracuję w IT');
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

    async fillFormToACompanyProfile() {
        await this.firstAndLastNameField.fill('Monika Testowa');
        await this.addressEmailField.fill('monikatestowazoo@bug.pl');
        await this.companyNameField.fill('Bug Sp. z o.o.');
        await this.acceptTermsCheckbox.check()
    }

    async clickSendARequestToACompanyProfile() {
        await this.sendARequestBtn.click();
    }

    async fillEmailField() {
        await this.emailField.fill('');
    }

    async clickEveryFieldAndstayItEmpty() {
        await this.nameField.press('Tab');
        await this.emailField.press('Tab');
        await this.subjectField.press('Tab');
        await this.messageField.press('Tab');
    }

    async fillFormToSendMessageOnLiveChat() {
        await this.openMenu.click();
        await this.nameField.fill('Tamara');
        await this.emailField.fill('');
        await this.subjectField.fill('Usuwanie konta kandydata');
        await this.messageField.fill('Dzień dobry. Chciałam dowiedzieć się jak usunąć konto kandydata, proszę o odpowiedź. Pozdrawiam');
        await this.leaveMessageBtn.click();
    }

    async fillFormToLearnDetailsAdvertisementsOfJobs() {
        await this.fullNameField.fill('Test');
        await this.contactEmailField.fill('Test@test.pl');
        await this.phoneField.fill('666222555');
        // await this.sendBtn.click();
    }
}