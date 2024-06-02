import { CandidateAccountPage } from '../src/pages/candidateAccount.page';
import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { LoginPage } from '../src/pages/login.page';
import {
  candidateInformation,
  linksToProfiles,
} from '../src/test-data/form.data';
import { candidate2 } from '../src/test-data/user.data';
import { expect, test } from '@playwright/test';

test.describe('Filling personal information in candidate profile', () => {
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let loginPage: LoginPage;
  let candidateAccount: CandidateAccountPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    loginPage = new LoginPage(page);
    candidateAccount = new CandidateAccountPage(page);

    await page.goto('/');
    await generalPage.clickAcceptCookiesOnPage();
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await loginPage.goToSignInPageByEmail();
    await loginPage.loginCandidateAccount(candidate2);
  });

  test('Should be able to adding photo', async ({ page }) => {
    // Arrange
    const expectedConfirmationAfterSaving = 'Your changes have been saved.';

    // Act
    await candidateAccount.clickEditPersonalInformationButton();
    await candidateAccount.addProfilePhotoToAccount();
    await candidateAccount.clickSaveChangesButton();

    // Assert
    await expect(page.getByText(expectedConfirmationAfterSaving)).toBeVisible();
  });

  test('Should be able to changing profile photo', async ({ page }) => {
    // Arrange
    const expectedConfirmationAfterSaving = 'Your changes have been saved.';

    // Act
    await candidateAccount.clickEditPersonalInformationButton();
    await candidateAccount.editProfilePhotoToAccount();
    await candidateAccount.clickSaveChangesButton();

    // Assert
    await expect(page.getByText(expectedConfirmationAfterSaving)).toBeVisible();
  });

  test('Should not be able to adding photo if file has wrong format', async ({
    page,
  }) => {
    // Arrange
    const expectedError =
      'Something went wrong. Make sure you are dropping one file, which meets the requirements';

    // Act
    await candidateAccount.clickEditPersonalInformationButton();
    await candidateAccount.addWrongProfilePhotoToAccount();

    // Assert
    await expect(page.getByText(expectedError)).toBeVisible();
  });

  test('Should be able to adding basic information', async ({ page }) => {
    // Arrange
    const expectedFirstAndLastNameAfterSaving = 'Monika Testowa';

    // Act
    await candidateAccount.clickEditPersonalInformationButton();
    await candidateAccount.fillBasicPersonalInformation(candidateInformation);
    await candidateAccount.clickSaveChangesButton();

    // Assert
    await expect(
      page.getByText(expectedFirstAndLastNameAfterSaving),
    ).toBeVisible();
  });

  test('Should not be able to adding basic information if are too long', async ({
    page,
  }) => {
    // Arrange
    const expectedErrorUnderNameInput = 'Name may have maximum 24 characters.';
    const expectedErrorUnderSurnameInput =
      'Surname may have maximum 24 characters.';
    const expectedErrorUnderMessageInput = 'Maximum number of characters 1000.';
    candidateInformation.name = 'Lorem ipsum dolor sit mi.';
    candidateInformation.surname = 'Lorem ipsum dolor sit mi.';
    candidateInformation.message =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec turpis non ligula laoreet venenatis. Sed augue felis, vestibulum a fermentum a, iaculis vitae metus. In elementum, tortor eu laoreet condimentum, ante sem porta lorem, sed ultricies arcu orci eget ante. Pellentesque commodo mauris vitae ipsum finibus, at laoreet dolor pretium. Donec mattis id felis sed euismod. Nunc eu lorem et mauris dapibus dapibus quis quis lacus. Aliquam erat volutpat. Morbi a tempor urna. Fusce aliquam, ex a pulvinar dapibus, metus quam aliquam erat, bibendum cursus metus odio sit amet elit. Morbi sagittis elementum tincidunt. Cras risus nunc, bibendum id maximus in, tristique eu libero. Aenean eros libero, tristique et tempus ut, lobortis non quam. Phasellus at ipsum tortor. Sed facilisis nibh eget dui iaculis, nec ultricies nulla lacinia. Proin eget orci pharetra, dapibus neque a, porttitor mauris. Pellentesque malesuada ornare mi, quis viverra elit. Vivamus at finibus enim, et venenatis quam nec.';

    // Act
    await candidateAccount.clickEditPersonalInformationButton();
    await candidateAccount.fillBasicPersonalInformation(candidateInformation);
    await candidateAccount.clickSaveChangesButton();

    // Assert
    await expect(
      page.getByText(expectedErrorUnderNameInput, { exact: true }),
    ).toBeVisible();
    await expect(page.getByText(expectedErrorUnderSurnameInput)).toBeVisible();
    await expect(page.getByText(expectedErrorUnderMessageInput)).toBeVisible();
  });

  test('Should be able to adding links to LinkedIn and Github profile', async ({
    page,
  }) => {
    // Arrange
    const expectedConfirmationAfterSaving = 'Your changes have been saved.';

    // Act
    await candidateAccount.clickEditPersonalInformationButton();
    await candidateAccount.fillLinksToProfile(linksToProfiles);
    await candidateAccount.clickSaveChangesButton();

    // Assert
    await expect(page.getByText(expectedConfirmationAfterSaving)).toBeVisible();
  });

  test('Should not be able to adding links to LinkedIn and Github profile if are not complete', async ({
    page,
  }) => {
    // Arrange
    const expectedErrorUnderLinkedinInput =
      'Please enter your LinkedIn account address.';
    const expectedErrorUnderGithubInput =
      'Please enter your Github account address.';
    linksToProfiles.linkedin = 'https://justjoin.it/';
    linksToProfiles.github = 'https://justjoin.it/';

    // Act
    await candidateAccount.clickEditPersonalInformationButton();
    await candidateAccount.fillLinksToProfile(linksToProfiles);
    await candidateAccount.clickSaveChangesButton();

    // Assert
    await expect(page.getByText(expectedErrorUnderLinkedinInput)).toBeVisible();
    await expect(page.getByText(expectedErrorUnderGithubInput)).toBeVisible();
  });

  test('Should not be able to choosing location if dropdown are empty', async ({
    page,
  }) => {
    // Arrange
    const expectedError = 'No options found';

    // Act
    await candidateAccount.clickEditPersonalInformationButton();
    await candidateAccount.chooseLocation();

    // Assert
    await expect(page.getByText(expectedError)).toBeVisible();
  });

  test('Should be able to adding resume', async ({ page }) => {
    // Arrange
    const expectedNameOfResumeAfterSaving = 'testowy.pdf';

    // Act
    await candidateAccount.addResumeToAccount();

    // Assert
    await expect(page.getByText(expectedNameOfResumeAfterSaving)).toBeVisible();
  });

  test('Should not be able to adding resume if file has wrong format', async ({
    page,
  }) => {
    // Arrange
    const expectedError =
      'Something went wrong. Make sure you are dropping one file, which meets the requirements';

    // Act
    await candidateAccount.addWrongResumeFormatToAccount();

    // Assert
    await expect(page.getByText(expectedError)).toBeVisible();
  });

  test('Should be able to download added resume', async ({ page }) => {
    // Act
    await candidateAccount.clickMenuOfResume();
    const downloadPromise = page.waitForEvent('download');
    await candidateAccount.downloadResumeFromAccount();
    const download = await downloadPromise;

    // Assert
    expect(download).toBeTruthy();
  });

  test('Should be able to delete added resume', async ({ page }) => {
    // Arrange
    const resumeForm = '#profile-small-form h6';
    const expectedTextAfterDeletedTheResume = 'Add document';

    // Act
    await candidateAccount.clickMenuOfResume();
    await candidateAccount.deleteResumeFromAccount();

    // Assert
    await expect(page.locator(resumeForm).nth(1)).toHaveText(
      expectedTextAfterDeletedTheResume,
    );
  });
});
