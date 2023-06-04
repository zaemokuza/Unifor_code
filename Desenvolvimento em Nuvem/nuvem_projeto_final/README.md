2.1) Digite o seguinte comando para ter privilégios de edição:
sudo su

Passo 2.2 – Instale o servidor do node

2.2.1: Instale o gerenciador de versão do nó (nvm, do inglês "node version
manager") digitando o seguinte na linha de comando:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

2.2.2. Ative o nvm digitando o seguinte na linha de comando:
. ~/.nvm/nvm.sh

2.2.3. Use o nvm para instalar a versão mais recente do Node.js digitando o
seguinte na linha de comando:
nvm install --lts

2.2.4. Teste a sua instalação no node com o seguinte comando:
node -v

Passo 2.3 - Instale o Git, clone o repositório, faça as configurações e suba a
aplicação.

2.3.1. Instale o Git
sudo yum install git -y

2.3.2. Teste a instalação do git
git --version

2.3.3. Clone o seu repositório do Github (obs: use repositório público)
git clone url-publicada

2.3.4. Navegue para o diretório onde está o index.js

npm init

npm install express --save

npm install @supabase/supabase-js

node index.js
