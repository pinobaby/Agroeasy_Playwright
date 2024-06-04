import { Page, expect } from '@playwright/test';

class DashboardPage {
  private page: Page;
  // private titleText = 'text=Estadísticas';
  // private welcomeText = 'text=Bienvenido, estás en Kakuyo';
  // private palletsMessage = 'text=Aun no has creado pallets';
  private navigationLinks = {
    home: 'text=Inicio',
    catalogs: 'text=Catálogos',
    processes: 'text=Procesos',
    reports: 'text=Reportes',
    utilities: 'text=Utilerías'
  };

  constructor(page: Page) {
    this.page = page;
  }
}

export default DashboardPage;
