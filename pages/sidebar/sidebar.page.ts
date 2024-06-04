import { Page, expect } from '@playwright/test';

class SidebarPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(): Promise<void> {
    await this.page.goto('http://localhost:9000/');
  }

  async clickTab(index: number): Promise<void> {
    const tab = this.page.locator(`div:nth-child(${index}) > .q-tab__content > .q-icon`);
    await expect(tab).toBeVisible(); 
    await tab.click();
  }

  async clickMainTab(): Promise<void> {
    const mainTab = this.page.getByRole('tab').first();
    await expect(mainTab).toBeVisible(); 
    await mainTab.click();
  }

  async clickButtonByName(name: string): Promise<void> {
    const button = this.page.getByRole('button', { name });
    await expect(button).toBeVisible(); 
    await button.click();
  }

  async toggleSection(section: string): Promise<void> {
    const expandButton = this.page.getByLabel(`Expandir "${section}"`);
    const collapseButton = this.page.getByLabel(`Ocultar "${section}"`);
    
    await expandButton.click();
    await expect(collapseButton).toBeVisible(); 
    
    await collapseButton.click();
    await expect(expandButton).toBeVisible(); 
  }

  async clickDropdown(): Promise<void> {
    const dropdown = this.page.getByText('arrow_drop_down');
    await expect(dropdown).toBeVisible(); 
    await dropdown.click();
  }

  async clickLabel(label: string): Promise<void> {
    const element = this.page.getByLabel(label);
    await expect(element).toBeVisible(); 
    await element.click();
  }

  async clickCloseSession(): Promise<void> {
    const closeButton = this.page.getByRole('button', { name: 'Cerrar sesión' });
    await expect(closeButton).toBeVisible();
    await closeButton.click();
  }
}

export default SidebarPage;
