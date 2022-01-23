/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */

import { goPay } from "../factory/GoPay";

export namespace payments {
  export interface Constructor {
    client: goPay;
  }

  export interface DefaultPayment {
    contact: contact;
    order_info: order_info;
    callback: callback;
    items: object;
  }

  export type order_info = {
    amount: number;
    currency: string;
    order_number: string;
    order_description: string;
    lang: string;
  };

  export type callback = {
    return_url: string;
    notification_url: string;
  };

  export type contact = {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    city: string;
    street: string;
    postal_code: string;
    country_code: string;
  };
}
