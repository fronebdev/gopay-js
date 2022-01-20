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
  private __sufix  = "/payments/payment";
  private __client: GoPay;

  constructor({ client }: payments.Constructor) {
    this.__client = client;
  }

  async getStatus(payment_id: number) {
    const res = await axios({
      url: this.__client.url + this.__sufix + "/" + payment_id,
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Authorization": "Bearer " + this.__client.getAccessToken(),
      },
    });

    return res.data
  }

}
