import { Page, expect } from '@playwright/test';

class LoginPage {
  private page: Page;
  private emailInput = 'input[placeholder="Correo electrónico"]';
  private passwordInput = 'input[placeholder="Contraseña"]';
  private loginButton = 'button:has-text("Ingresar")';
  private dropdownArrow = 'text=arrow_drop_down';
  private kakuyoOption = 'text=| Kakuyo';
  private goToAppButton = 'button:has-text("Ir a la Aplicación")';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(): Promise<void> {
    console.log('Navigating to the login page');
    await this.page.goto('http://localhost:9000/', { waitUntil: 'networkidle' });
  }

  async login(email: string, password: string): Promise<void> {
    console.log('Logging in with email:', email);
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async selectKakuyo(): Promise<void> {
    console.log('Selecting Kakuyo');
    await this.page.waitForSelector(this.dropdownArrow, { timeout: 15000 });
    await this.page.click(this.dropdownArrow);
    await this.page.waitForSelector(this.kakuyoOption, { timeout: 15000 });
    await this.page.click(this.kakuyoOption);
  }

  async goToApp(): Promise<void> {
    console.log('Navigating to the application');
    await this.page.waitForSelector(this.goToAppButton, { timeout: 15000 });
    await this.page.click(this.goToAppButton);
  }
}

export default LoginPage;
