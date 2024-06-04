import { Page, expect } from '@playwright/test';

class CropsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToCrops(): Promise<void> {
    await this.page.click('text=Catalogos');
    await this.page.click('text=Cultivos');
  }

  async searchCrop(): Promise<void> {
    await this.page.getByRole('textbox').click();
  }

  async clickMoreButton(): Promise<void> {
    await this.page.getByRole('button', { name: 'Más' }).click();
  }

  async toggleActiveInactiveCrops(): Promise<void> {
    await this.page.getByText('Tamaño de cultivo activos').click();
    await this.page.getByLabel('Tamaño de cultivo inactivos').locator('div').nth(2).click();
  }

  async goToVarieties(): Promise<void> {
    await this.page.getByRole('link', { name: 'Variedades' }).click();
  }

  async toggleActiveInactiveVarieties(): Promise<void> {
    await this.page.getByText('Variedad activas').click();
    await this.page.getByText('Variedad inactivas').click();
  }

  async goToTypes(): Promise<void> {
    await this.page.getByRole('link', { name: 'Tipos' }).click();
  }

  async toggleActiveInactiveTypes(): Promise<void> {
    await this.page.getByText('Tipos de cultivos activos').click();
    await this.page.getByText('Tipos de cultivos inactivos').click();
  }

  async goToCropsFromMenu(): Promise<void> {
    await this.page.getByRole('link', { name: 'Cultivos' }).nth(1).click();
  }

  async toggleActiveInactiveCropsFromMenu(): Promise<void> {
    await this.page.getByText('Cultivos activos').click();
    await this.page.getByLabel('Cultivos inactivos').locator('div').nth(2).click();
  }

  async clickOnCropCell(cropName: string): Promise<void> {
    await this.page.getByRole('cell', { name: cropName }).click();
  }
  

  async updateCrop(): Promise<void> {
    await this.page.getByText('Actualizar cultivoUltima').click();
    await this.page.locator('aside').filter({ hasText: 'Actualizar cultivo Actualizar' }).getByRole('button').first().click();
  }


  async createNewCrop(): Promise<void> {
    await this.page.getByRole('link', { name: 'Tamaños' }).click();
    await this.page.getByRole('button', { name: 'Crear nuevo tamaño de cultivo' }).click();
  }
}

export default CropsPage;
