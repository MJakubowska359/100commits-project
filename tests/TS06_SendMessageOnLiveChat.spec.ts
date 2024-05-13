import { FormsPage } from '../src/pages/forms.page';
import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { messageOnLiveChat } from '../src/test-data/form.data';
import { expect, test } from '@playwright/test';

test.describe('Sending message on live chat', () => {
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let formsPage: FormsPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    formsPage = new FormsPage(page);

    await page.goto('/');
    await generalPage.clickAcceptCookiesOnPage();
  });

  test('Should be able to send message on live chat', async ({ page }) => {
    // Arrange
    const expectedParagraphAfterSendMessage =
      'Thank you! Your message has been sent. Our support team will contact you soon.';

    // Act
    await headerPage.openMenuAndLiveChat();
    await formsPage.clickLeaveAMessageBtnAndFillFormToSendMessage(
      messageOnLiveChat,
    );

    // Assert
    await expect(page.getByRole('paragraph')).toHaveText(
      expectedParagraphAfterSendMessage,
    );
  });

  test('Should not be able to send message on live chat', async ({ page }) => {
    // Arrange
    const expectedError = 'Please fill in required fields.';
    messageOnLiveChat.message = '';

    // Act
    await headerPage.openMenuAndLiveChat();
    await formsPage.clickLeaveAMessageBtnAndFillFormToSendMessage(
      messageOnLiveChat,
    );

    // Assert
    await expect(
      page.frameLocator('iframe[name="chat-widget"]').getByRole('alert').nth(3),
    ).toHaveText(expectedError);
  });
});
