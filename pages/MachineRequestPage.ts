import { Page, expect, BrowserContext } from '@playwright/test';

export class MachineRequestPage {
  readonly page: Page;
  readonly context: BrowserContext;

  private nameInput = 'input[placeholder="Digite aqui"]:nth-of-type(1)';
  private termsCheckbox = 'input[type="checkbox"]';
  private submitButton = 'button:has-text("Peça a sua agora!")';

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
  }

  async preencherFormulario(
    nome: string,
    whatsapp: string,
    cpfCnpj: string,
    plano: string,
    maquina: string
  ) {
    await this.page.fill(this.nameInput, nome);
    await this.page.fill('#whatsapp', whatsapp);
    await this.page.fill('#document', cpfCnpj);
    await this.page.selectOption('#plan', '1'); // seleciona Plano Classic
    await this.page.selectOption('#interest', '1');
    await this.page.check(this.termsCheckbox);
  }

  async enviarFormulario() {
    await this.page.click(this.submitButton);
  }

   async validarSolicitacaoSucesso() {

    const mensagem = this.page.locator('text=Sua solicitação foi enviada com sucesso! Vamos redirecioná-lo para o WhatsApp.');
    await expect(mensagem).toBeVisible();
  }
}
