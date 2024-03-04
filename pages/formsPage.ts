import { Page } from "@playwright/test";

export class FormsPage {
    constructor(private page: Page) { }

    // 
    emailField = this.page.getByPlaceholder('forexample@domain.com') // raport.justjoin.it
    passwordBtn = this.page.getByPlaceholder('At least 8 characters')

    // raport.justjoin.it
    nameAndSurnameBtn = this.page.getByLabel('Imię i nazwisko')
    whoAreYou = this.page.getByPlaceholder('Wybierz jedną z opcji')
    termsCheckbox = this.page.getByRole('checkbox', {name: 'zgoda1'})
    downloadReportBtn = this.page.getByRole('button', {name: 'POBIERZ RAPORT'})

    // live chat
    openChatBtn = this.page.getByLabel('Open LiveChat chat widget')
    yourNameField = this.page.getByLabel('Your name')
    subjectField = this.page.getByLabel('Subject')
    messageField = this.page.getByLabel('Message')
    openMenu = this.page.getByLabel('Open menu')
    minimizeWindow = this.page.getByLabel('Minimize window')
    leaveMessageBtn = this.page.getByRole('button', {name: 'Leave a message'})

    // checboxy terms/privacy policy and handel informations

    async fillFormToDownloadReport() {
        await this.nameAndSurnameBtn.fill('Monika Miś');
        await this.emailField.fill('monikamis@interia.pl');
        await this.whoAreYou.selectOption('Pracuję w IT');
        await this.termsCheckbox.check()
        // await this.downloadReportBtn.click()

        // await page1.getByLabel('Imię i nazwisko').click();
        // await page1.getByLabel('E-mail*').click();
        // await page1.getByLabel('Zgadzam się na przetwarzanie').check();
        // await page1.getByRole('button', { name: 'POBIERZ RAPORT' }).click();
        // await page1.getByText('Wymagane').first().click();
        // await page1.getByText('Wymagane').first().click();
        // await page1.getByText('Wymagane').click();
    }

    async fillEmailField() {
        await this.emailField.fill('');
    }

    async fillFormToSendMessageOnLiveChat() {
        await this.openChatBtn.click();
        await this.openMenu.click();
        await this.yourNameField.fill('Tamara');
        await this.emailField.fill('');
        await this.subjectField.fill('Usuwanie konta kandydata');
        await this.messageField.fill('Dzień dobry. Chciałam dowiedzieć się jak usunąć konto kandydata, proszę o odpowiedź. Pozdrawiam');
        await this.leaveMessageBtn.click();
    } 
}