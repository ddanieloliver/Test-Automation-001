import { HomePage } from './../pages/HomePage';
import { test, BrowserContext } from '@playwright/test';
import { MachineRequestPage } from '../pages/MachineRequestPage'; 

test.describe('Fluxo de solicitação de maquininha', () => {
  test('Usuário acessa o site, clica em "Adquira sua Bolt" e envia solicitação', async ({ page, context }) => {
 
    const homePage = new HomePage(page);
    const requestPage = new MachineRequestPage(page, context)

    // Acessa o site inicial
    await homePage.goto();

    // Clica no botão "Adquira sua Bolt"
    await homePage.clicarAdquiraSuaBolt();

    // Preenche o formulário na página redirecionada
    await requestPage.preencherFormulario(
      'João Silva',
      '85999999999',
      '00300034075',
      'Plano Básico',
      'Maquininha Bolt'
    );
    // Envia o formulário
    await requestPage.enviarFormulario();
    // Valida o sucesso da solicitação
    await requestPage.validarSolicitacaoSucesso();
  });
});
