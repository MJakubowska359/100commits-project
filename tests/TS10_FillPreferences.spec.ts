import { GeneralPage } from '../src/pages/general.page';
import { HeaderPage } from '../src/pages/header.page';
import { LoginPage } from '../src/pages/login.page';
import { MatchmakingPage } from '../src/pages/matchmaking.page';
import { candidateName } from '../src/test-data/form.data';
import { candidate2 } from '../src/test-data/user.data';
import { expect, test } from '@playwright/test';

test.describe('Filling preferences in candidate profile', () => {
  let generalPage: GeneralPage;
  let headerPage: HeaderPage;
  let loginPage: LoginPage;
  let matchmakingPage: MatchmakingPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    headerPage = new HeaderPage(page);
    loginPage = new LoginPage(page);
    matchmakingPage = new MatchmakingPage(page);

    await page.goto('/');
    await generalPage.clickAcceptCookiesOnPage();
    await headerPage.goToSignInPageForCandidateFromPageHeader();
    await loginPage.goToSignInPageByEmail();
    await loginPage.loginCandidateAccount(candidate2);
  });

  test('Should be able to adding basic information', async ({ page }) => {
    // Arrange
    const header = 'form p';
    const expectedNameHeader =
      "Let's start with some basic information 🔥 What's your first and last name?";
    const expectedAreasHeader = 'What specific IT areas are you interested in?';
    const expectedRoleHeader = 'What role are you seeking?';
    const expectedYearsOfExperienceHeader =
      "How many years of experience do you have in the role you're seeking?";
    const expectedWorkplaceHeader = 'What is your ideal workplace?';
    const expectedJobTypeHeader =
      'What is your ideal job type and minimum salary expectations?';
    const expectedLevelOfEnglishHeader = 'How well do you speak English?';
    const expectedSkillsHeader =
      'Which of your skills do you want to use in your new position?';

    // const expectedSuccessNotification = '';

    // Act
    await matchmakingPage.clickGoToYourPreferencesButton();
    await expect(page.locator(header)).toHaveText(expectedNameHeader);
    await matchmakingPage.fillNameAndSurname(candidateName);
    await expect(page.locator(header)).toHaveText(expectedAreasHeader);
    await matchmakingPage.checkInterestingArea();
    await expect(page.locator(header)).toHaveText(expectedRoleHeader);
    await matchmakingPage.fillPosition();
    await expect(page.locator(header)).toHaveText(
      expectedYearsOfExperienceHeader,
    );
    await matchmakingPage.fillYearsOfExperienceByClickPlusIcon();
    await expect(page.locator(header)).toHaveText(expectedWorkplaceHeader);
    await matchmakingPage.checkRemotelyWorkplace();
    await expect(page.locator(header)).toHaveText(expectedJobTypeHeader);
    await matchmakingPage.checkB2BType();
    await expect(page.locator(header)).toHaveText(expectedLevelOfEnglishHeader);
    await matchmakingPage.chooseLevelOfEnglish();
    await expect(page.locator(header)).toHaveText(expectedSkillsHeader);

    // Assert
    // await expect(page.getByText(expectedSuccessNotification)).toBeVisible();
  });
});
