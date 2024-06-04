import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/login/login.page';


test('test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('erosleon9@gmail.com', 'Erleon9');
  await loginPage.selectKakuyo();
  await loginPage.goToApp();

});


