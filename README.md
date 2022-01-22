<p align="center">
 <img width="250" src="https://cdn.myshoptet.com/usr/www.hobbychef.cz/user/documents/upload/GoPay-logo-varianta-A-PANTONE.png" alt="GPlogo"/>
</p>

<h1 align="center">gopay-js</h1>

<div align="center">
The only functional javascript library for GoPay payment gateway.
</div>

## ⚡️ Getting Started

### Installation

```bash
$ npm i gopay-js
# or if you are using Yarn
$ yarn add gopay-js
```

# Tree

GoPay

- init
- getTokens()
- getAccessToken()

Payments

- getStatus()
- createPayment()

Misc

- getAllowedMethodes()

# 🖇 Documentation

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
client.getTokens();
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
client.getAccessToken();
```

Returns only `access_token` for necessary Authorization

## Payments

It is necessary to create a payment before calling the payment gateway.

```ts
import { Payments } from "gopay-js";

const payments = new Payments({
  client: client,
});
```

### getStatus()

The payment status functionality allows the point of sale to find out the current status of a previously created payment. By default, the payment status is queried upon receipt of a payment status change notification.

```ts
payments.getStatus(payment_id);
```

### createPayment()

```ts
payments.createPayment({
  contact: {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    city: "",
    street: "",
    postal_code: "",
    country_code: "",
  },
  order_info: {
    amount: 0,
    currency: "",
    order_number: "",
    order_description: "",
    lang: "",
  },
  callback: {
    return_url: "",
    notification_url: "",
  },
  items: [],
});
```

## Misc

```ts
import { Misc } from "gopay-js";

const misc = new Misc({
  client: client,
});
```

### getAllowedMethodes()

The method returns the JSON structure of all allowed payment methods on the e-shop profile. You only need to fill up `currency` option.

```ts
misc.getAllowedMethodes("currency");
```

## 🙅🏿‍♂️ Used OSS

- Chalk
  - https://github.com/chalk/chalk

# ⭐️ License

gopay-js is licensed under MIT. See the LICENSE file.
