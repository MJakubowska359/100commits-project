import { CandidateAccountPage } from '../src/pages/candidateAccount.page';
import { FiltersPage } from '../src/pages/filters.page';
import { FormsPage } from '../src/pages/forms.page';
import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { LoginPage } from '../src/pages/login.page';
import { candidate1, candidateEmail } from '../src/test-data/user.data';
import { faker } from '@faker-js/faker/locale/pl';
import { expect, test } from '@playwright/test';

test.describe('Save filtering to subscribe offers', () => {
  let loginPage: LoginPage;
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let filtersPage: FiltersPage;
  let formsPage: FormsPage;
  let candidateAccountPage: CandidateAccountPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    filtersPage = new FiltersPage(page);
    formsPage = new FormsPage(page);
    candidateAccountPage = new CandidateAccountPage(page);

    await page.goto('/');
    await generalPage.clickAcceptCookiesOnPage();
  });

  test('Should be able to subscribe filtering offers as ANONYMOUS USER', async ({
    page,
  }) => {
    // Arrange
    const expectedTextWithoutSavedSearches =
      "You haven't saved your search criteria yet";
    const expectedChosenSearches = 'Python Remote With salary';
    const expectedConfirmationAddedNotification = 'Adding a notification.';
    candidateEmail.userEmail = faker.internet.email();

    // Act
    await headerPage.clickStarIconOnHeaderOfPage();
    await expect(
      page.getByRole('heading', {
        name: expectedTextWithoutSavedSearches,
      }),
    ).toBeVisible();
    await headerPage.closeSavedSearches();
    await filtersPage.clickPythonLogo();
    await filtersPage.clickWithSalaryButton();
    await filtersPage.clickRemoteCheckbox();
    await filtersPage.clickSubscribeOption();
    await filtersPage.clickSaveYourSearchCheckbox();
    await headerPage.clickStarIconOnHeaderOfPage();
    await expect(page.getByText(expectedChosenSearches)).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Go to offers' }),
    ).toBeVisible();
    await filtersPage.clickGoToOffersButton();
    await filtersPage.clickSubscribeOption();
    await filtersPage.clickTurnOnEmailNotificationsButton();
    await expect(
      page.getByRole('heading', { name: 'Add an e-mail notification' }),
    ).toBeVisible();
    await formsPage.fillEmailAddress(candidateEmail);
    await formsPage.chooseOptionsForSubscribeOffersForAnonymousUser();

    // Assert
    await expect(
      page.getByText(expectedConfirmationAddedNotification),
    ).toBeVisible();
  });

  test('Should not be able to subscribe filtering offers if account for email address is existing', async ({
    page,
  }) => {
    // Arrange
    const expectedTextWithoutSavedSearches =
      "You haven't saved your search criteria yet";
    const expectedChosenSearches = 'Python Remote With salary';
    const expectedErrorNotification = 'Log in to add notifications';

    // Act
    await headerPage.clickStarIconOnHeaderOfPage();
    await expect(
      page.getByRole('heading', {
        name: expectedTextWithoutSavedSearches,
      }),
    ).toBeVisible();
    await headerPage.closeSavedSearches();
    await filtersPage.clickPythonLogo();
    await filtersPage.clickWithSalaryButton();
    await filtersPage.clickRemoteCheckbox();
    await filtersPage.clickSubscribeOption();
    await filtersPage.clickSaveYourSearchCheckbox();
    await headerPage.clickStarIconOnHeaderOfPage();
    await expect(page.getByText(expectedChosenSearches)).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Go to offers' }),
    ).toBeVisible();
    await filtersPage.clickGoToOffersButton();
    await filtersPage.clickSubscribeOption();
    await filtersPage.clickTurnOnEmailNotificationsButton();
    await expect(
      page.getByRole('heading', { name: 'Add an e-mail notification' }),
    ).toBeVisible();
    await formsPage.fillEmailAddress(candidateEmail);
    await formsPage.chooseOptionsForSubscribeOffersForAnonymousUser();

    // Assert
    await expect(page.getByText(expectedErrorNotification)).toBeVisible();
  });

  test('Should be able to subscribe filtering offers as LOGGED USER', async ({
    page,
  }) => {
    // Arrange
    const expectedChosenSearches = 'Python Remote With salary';

    // Act
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await loginPage.goToSignInPageByEmail();
    await loginPage.loginCandidateAccount(candidate1);
    await generalPage.clickLogoJustJoin();
    await filtersPage.clickPythonLogo();
    await filtersPage.clickWithSalaryButton();
    await filtersPage.clickRemoteCheckbox();
    await filtersPage.clickSubscribeOption();
    await filtersPage.clickSaveYourSearchCheckbox();
    await filtersPage.clickTurnOnEmailNotificationsButton();
    await formsPage.chooseOptionsForSubscribeOffersForLoggedUser();
    await candidateAccountPage.clickMyProfileOnHeaderOfPage();
    await candidateAccountPage.goToSavedSearchesFromTopMenu();

    // Assert
    await expect(
      page.locator('p').filter({ hasText: 'Saved searches' }),
    ).toBeVisible();
    await expect(page.getByText(expectedChosenSearches)).toBeVisible();
  });
});
