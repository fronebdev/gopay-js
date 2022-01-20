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
$ npm i gopay-js
# or if you are using Yarn
$ yarn add gopay-js
```

# 🖇 Documentation

## Tree

GoPay

- init
- getTokens()
- getAllowedTokens()

Misc

- getAllowedMethodes()

### GoPay

Setting up `enviroment` is used to switch between sandbox (`sandbox`) and the production gateway (`production`).

```ts
import { goPay } from "gopay-js";

const client = new goPay({
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

All methodes included in base module.

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

### getAccessToken()

```ts
gp.getAccessToken();
```

Returns only `access_token` for necessary Authorization

## Misc

```ts
import { Misc } from "gopay-js";

const misc = new Misc({
  client: gp,
});
```

### getAllowedMethodes()

The method returns the JSON structure of all allowed payment methods on the e-shop profile. You only need to fill up `currency` option.

```ts
misc.getAllowedMethodes("CZK");
```

## 🙅🏿‍♂️ Used OSS

- Chalk
  - https://github.com/chalk/chalk

# ⭐️ License

gopay-js is licensed under MIT. See the LICENSE file.
