import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/login/login.page';
import SidebarPage from '../../pages/sidebar/sidebar.page';

test('Sidebar interactions', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const sidebarPage = new SidebarPage(page);

  await loginPage.navigate();
  await loginPage.login('erosleon9@gmail.com', 'Erleon9');
  await loginPage.selectKakuyo();
  await loginPage.goToApp();

 
  await sidebarPage.clickTab(2);
  await sidebarPage.clickTab(3);
  await sidebarPage.clickTab(4);
  await sidebarPage.clickMainTab();
  await sidebarPage.clickButtonByName('Inicio');
  await sidebarPage.toggleSection('Catalogos');
  await sidebarPage.toggleSection('Procesos');
  await sidebarPage.toggleSection('Reportes');
  await sidebarPage.toggleSection('Utilerias');
  await sidebarPage.clickTab(2);
  await sidebarPage.clickTab(3);
  await sidebarPage.clickDropdown();
  await sidebarPage.clickLabel('Kakuyoarrow_drop_down');
  await sidebarPage.clickTab(4);
  await sidebarPage.clickCloseSession();

});
