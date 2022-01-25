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

[GoPay](https://github.com/fronebdev/gopay-js/blob/main/README.md#GoPay)

- init
- getTokens()
- getAccessToken()

[Payments](https://github.com/fronebdev/gopay-js/blob/main/README.md#Payments)

- getStatus()
- createPayment()
- refundPayment()
- createRecurrence()

[Misc](https://github.com/fronebdev/gopay-js/blob/main/README.md#Misc)

- getAllowedMethodes()
- accountStatement()

[Types](https://github.com/fronebdev/gopay-js/blob/main/README.md#Types)

- Format
- Item

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

The payment is intended for payment of the order by credit card, bank transfer, GoPay account and other payment methods.

```ts
payments.createPayment({
  payment_info: {
    allowed_payment_instruments: [
      "PAYMENT_CARD",
      "BANK_ACCOUNT"
    ],
    default_payment_instrument: "PAYMENT_CARD",
    allowed_swifts: [
      "FIOBCZPP",
      "BREXCZPP"
    ],
    default_swift: "FIOBCZPP",
  }
  contact: {
    first_name: "Zbyněk",
    last_name: "Žák",
    email: "test@test.cz",
    phone_number: "+420777456123",
    city: "České Budějovice",
    street: "Planá 67",
    postal_code: "37301",
    country_code: "CZE",
  },
  order_info: {
    amount: 119990,
    currency: "CZK",
    order_number: "OBJ20200825",
    order_description: "Obuv",
    lang: "CS",
  },
  callback: {
    return_url: "https://www.example.com/return",
    notification_url: "https://www.example.com/notify",
  },
  items: [
    {
      "type": "DISCOUNT",
      "name": "Obuv",
      "amount": 119990,
      "count": 1,
      "vat_rate": "21",
      "ean": 1234567890123,
      "product_url": "https://www.eshop.cz/boty/lodicky"
    }
  ],
});
```

The `items` parameter in body must contain order items in a certain form, so we have pre-created a type for you. More in Types section

### refundPayment()

Payment refund allows you to return funds for a payment that has already been made to the customer.
Refunds can be made in two ways. A full refund allows you to refund the full amount based on the `amount` parameter, while a partial refund specifies the refund amount.

```ts
payments.refundPayment(payment_id, amount);
```

### createRecurrence()

With the request, it is possible to repeat the payment on the basis of a previously established recurring payment in the ON_DEMAND mode (on request). By recurring in this mode, a subsequent payment of any amount is established. The point of sale is informed of the payment in the form of a notification of a change in the payment status.

```ts
payments.createRecurrence({
  amount: 123,
  currency: "CZK",
  order_number: "OBJ1233878",
  order_description: "some desc.",
  items: [
  {
    "type": "ITEM",
    "name": "Pojisteni",
    "amount": 119900,
    "count": 1,
    "vat_rate": "21",
    "ean": 1234567890123,
    "product_url": "https://www.eshop.cz/pojisteni"
  }
  ]
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

### accountStatement()

The funcionality generates statements from GoPay business account. It returns content of account statement file. More information about file types specification you can find in [Help](https://doc.gopay.com/#account-statement)

```ts
misc.accountStatement({
  date_from: new Date(),
  date_to: new Date(),
  currency: "CZK",
  format: "CSV_A"
});
```

## Types

Here is a list and description of the types created, which are for simplification and safer work with this library

### Formats

| CSV   | XLS   | ABO   |
| ----- | ----- | ----- |
| CSV_A | XLS_A | ABO_A |
| CSV_B | XLS_B | ABO_B |
| CSV_C | XLS_C |
| CSV_D |

### Item Type

The `items` parameter in body must contain order items in a certain form, so we have pre-created a type for you.

You can import simply import it and use it
```ts
import { item } from "gopay-js";
```

Here is the form
```ts
type: string;
name: string;
amount: number;
count: number;
vat_rate: string;
ean: number;
product_url: string;
```

## 🙅🏿‍♂️ Used OSS

- Chalk
  - https://github.com/chalk/chalk

# ⭐️ License

gopay-js is licensed under MIT. See the LICENSE file.
