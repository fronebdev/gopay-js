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
          allowed_payment_instruments: data.payment_info.allowed_payment_instruments,
          default_payment_instrument: data.payment_info.default_payment_instrument,
          allowed_swifts: data.payment_info.allowed_swifts,
          default_swift: data.payment_info.default_swift,
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

  async refundPayment(payment_id: number, amount: number) {
    const params = new URLSearchParams();
    params.append("amount", String(amount));

    const res = await axios({
      url: this.__client.url + this.__sufix + "/" + payment_id + "/refund",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Bearer " + (await this.__client.getAccessToken()),
      },
      data: params,
    });

    return res.data;
  }

  async createRecurrence(data: payments.Recurrence) {
    const res = await axios({
      url: this.__client.url + this.__sufix,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + (await this.__client.getAccessToken()),
      },
      //TODO: add aditional params
      data: {
        amount: data.amount,
        currency: data.currency,
        order_number: data.order_number,
        order_description: data.order_discription,
        items: data.items,
      },
    });

    return res.data;
  }

}
