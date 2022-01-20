/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */

import axios from "axios";
import { GoPay } from "..";
import { misc } from "../types/misc";

export class Misc {
  private __client: GoPay;

  constructor({ client }: misc.Constructor) {
    this.__client = client;
  }

  async getAllowedMethodes(currency: string) {
    const res = await axios({
      url:
        this.__client.url +
        "/eshops/eshop/" +
        this.__client.credentials.goID +
        "/payment-instruments/" +
        currency,
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + (await this.__client.getAccessToken()),
      },
    });

    return res.data;
  }
}
