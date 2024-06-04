import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/login/login.page';
import DashboardPage from '../../pages/dashboard/dashboard.page';

test('Dashboard interactions', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  // Login and navigate to dashboard
  console.log('Starting test: Dashboard interactions');
  await loginPage.navigate();
  await loginPage.login('erosleon9@gmail.com', 'Erleon9');
  await loginPage.selectKakuyo();
  await loginPage.goToApp();

  
});
