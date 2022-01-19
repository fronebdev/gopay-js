<p align="center">
 <img width="250" src="https://cdn.myshoptet.com/usr/www.hobbychef.cz/user/documents/upload/GoPay-logo-varianta-A-PANTONE.png" alt="GPlogo"/>
</p>

<h1 align="center">gopay-js</h1>

<div align="center">
The only functional library for GoPay payment gateway.
</div>

## ⚡️ Getting Started

### Installation

```bash
$ npm i @fronebdev/gopay-js
# or if you are using Yarn
$ yarn add @fronebdev/gopay-js
```

# 🖇 Documentation

## Tree

- init
- getTokens()

### Initialization

Setting up `enviroment` is used to switch between sandbox (`sandbox`) and the production gateway (`production`). 

```ts
import { goPay } from "gopay-js";

const gp = new goPay({
  log: true,
  enviroment: "sandbox",
  credentials: {
    goID: "999999999",
    clientID: "00000000",
    clientSecret: "99999999",
  },
});
```

## Methodes

All methodes included in library.

### getTokens()

the getTokens() method returns all the necessary keys, to work with GoPay here is example.:

```ts
gp.getTokens();
```

```json
//returns
{
  "token_type": "bearer",
  "access_token": "token",
  "expires_in": 1800,
  "refresh_token": "token"
}
```

## 🙅🏿‍♂️ Used OSS

- Chalk
  - https://github.com/chalk/chalk

# ⭐️ License

gopay-js is licensed under MIT. See the LICENSE file.
