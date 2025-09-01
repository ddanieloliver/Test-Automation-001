import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  private adquiraButton = 'a:has-text("ADQUIRA SUA BOLT")';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://bolt.com.br');
  }

  async clicarAdquiraSuaBolt() {
    await this.page.click(this.adquiraButton);
  }
}
