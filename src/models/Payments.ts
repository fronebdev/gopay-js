/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */

import axios from "axios";
import { GoPay } from "..";
import { payments } from "../types/payments";

export class Payments {
  private __sufix = "/payments/payment";
  private __client: GoPay;

  constructor({ client }: payments.Constructor) {
    this.__client = client;
  }

  async createPayment(data: payments.DefaultPayment) {
    const res = await axios({
      url: this.__client.url + this.__sufix,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + (await this.__client.getAccessToken()),
      },
      //TODO: add additional params
      data: {
        payer: {
          allowed_payment_instruments: ["PAYMENT_CARD", "BANK_ACCOUNT"],
          default_payment_instrument: "PAYMENT_CARD",
          allowed_swifts: ["FIOBCZPP", "BREXCZPP"],
          default_swift: "FIOBCZPP",
          contact: {
            first_name: data.contact.first_name,
            last_name: data.contact.last_name,
            email: data.contact.email,
            phone_number: data.contact.phone_number,
            city: data.contact.city,
            street: data.contact.street,
            postal_code: data.contact.postal_code,
            country_code: data.contact.country_code,
          },
        },
        target: {
          type: "ACCOUNT",
          goid: this.__client.credentials.goID,
        },
        items: data.items,
        amount: data.order_info.amount,
        currency: data.order_info.currency,
        order_number: data.order_info.order_number,
        order_description: data.order_info.order_description,
        lang: data.order_info.lang,
        callback: {
          return_url: data.callback.return_url,
          notification_url: data.callback.notification_url,
        },
      },
    });

    return res.data;
  }

  async getStatus(payment_id: number) {
    const res = await axios({
      url: this.__client.url + this.__sufix + "/" + payment_id,
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + (await this.__client.getAccessToken()),
      },
    });

    return res.data;
  }
}
