📋 Pré-requisitos
Antes de começar, certifique-se de ter instalado:

Node.js
 (versão LTS recomendada, ex.: 18+)

npm
 (instalado junto com o Node.js)

Git (para clonar o repositório)

🚀 Instalação do projeto

Clone o repositório

Acesse a pasta do projeto

Instale as dependências:

npm install

Instale os navegadores suportados pelo Playwright:

npx playwright install

▶️ Executando os testes

Rodar todos os testes:

npx playwright test


Rodar um teste específico:

npx playwright test nome-do-arquivo.spec.ts

Rodar testes em modo interativo (UI Mode):

npx playwright test --ui


Rodar testes em um navegador específico (Chromium, Firefox ou WebKit):

npx playwright test --project=chromium

📊 Relatórios

Após a execução, um relatório em HTML pode ser gerado com:

npx playwright show-report


Isso abrirá um dashboard no navegador com detalhes dos testes executados.
