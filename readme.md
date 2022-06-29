Para rodar o servidor:

npm i

npm run dev 


Para a utilização do prisma:

na pasta raiz, crie o arquivo .env 

No arquivo .env será necessário configurar a estrutura  para DATABASE_URL, neste caso utiliza-se o banco de dados mySQL, substitua os valores em letra maiúscula:

mysql://USER:PASSWORD@HOST:PORT/DATABASE


HOST -> IP address/domain do seu database 
PORT ->	porta que o database funciona 
USER ->	nome do usuário do seu database
PASSWORD -> senha do usuário do seu database
DATABASE -> nome do database que você quer usar

exemplo:

DATABASE_URL="mysql://root:123456@localhost:3306/testeDRM"

Para abrir a interface visual do prisma:

npx prisma studio


Será necessário criar o database no mySQL com  o nome utilizado no arquivo .env


Um exemplo de como as rotas podem ser chamadas está na seguinte URL:

https://documenter.getpostman.com/view/21709187/UzBvFi55





