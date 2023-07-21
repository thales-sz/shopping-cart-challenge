# Shopping Cart Challenge

Aplicação criada para processo seletivo Dev Fullstack.

## Organização

O projeto está organizado em 2 diretórios:
- server (backend)
- web (frontend)

Ambos utilizam TypeScript como linguagem de programação.

## Tecnologias e bibliotecas utilizadas

- Backend: 
> TypeScript, NestJS, mongoose ODM, class-validator e Joi.
- Frontend: 
> TypeScript, React, Vite, React-Query, React-Icons, axios, tailwindcss.

## Preview

Foi feito o deploy da aplicação para uma visualização mais rápida de seu funcionamento. 

Você pode acessar a aplicação nesse link: https://shopping-cart-challenge-iota.vercel.app/

Nela você consegue testar todas as funcionalidades da aplicação.

(As requisições podem demorar um pouco pois o servidor fica inativo depois de alguns minutos)

## Rodando localmente

É necessário ter instalado algum gerenciador de pacote como o [NPM](https://www.npmjs.com/)

Faça o clone ou fork do projeto para seu dirétorio pessoal e siga os seguintes passos:

### Instalando Dependências - Back end

> Na raiz do diretório do backend (pasta ./server):

```bash
npm install
```

### Executando a Aplicação

```bash
npm run build
npm run start:prod
```

> Ou executando em modo de desenvolvedor:

```bash
npm run start:dev
```

* Para execução local do projeto é necessário adicionar um arquivo .env na pasta ./server (Existe um arquivo ".env.example" com o formato a ser seguido)

* As requisições devem ser feitas na porta 3000

### Instalando Dependências - Front end

> Na raiz do diretório do frontend (pasta ./web):

```bash
npm install
```

### Executando a Aplicação

```bash
npm run dev
```

* Sua aplicação estará disponível na porta :5173

## Endpoints

Exemplos de requisições e seus conteudos.

#### Products


(GET) http://localhost:3000/products 

Resultado:

```js
[
  {
    "_id": "64ba961e9b588b4230f2de7f",
    "name": "Samsung Galaxy A14",
    "image": "http://http2.mlstatic.com/D_785935-MLA69242565747_052023-I.jpg",
    "price": 999,
    "__v": 0
  },
  {
    "_id": "64ba961e9b588b4230f2de81",
    "name": "Samsung Galaxy A04e",
    "image": "http://http2.mlstatic.com/D_974609-MLA53352720362_012023-I.jpg",
    "price": 793,
    "__v": 0
  },
  ...
]
```
(GET) http://localhost:3000/orders

Resultado:

```js
[
{
    "_id": "64baa87c7d0bddb67ae53dd9",
    "products": [
      {
        "_id": "64ba961e9b588b4230f2de8f",
        "name": "Xiaomi Redmi 10",
        "image": "http://http2.mlstatic.com/D_954510-MLA51163159088_082022-I.jpg",
        "price": 784,
        "__v": 0
      }
    ],
    "totalPrice": 784,
    "__v": 0
  },
  ...
]
```



## Autor

[Thales Souza Chagas](https://www.linkedin.com/in/thales-sz/)
## Licença

[MIT](https://choosealicense.com/licenses/mit/)
