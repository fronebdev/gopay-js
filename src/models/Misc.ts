/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */

import axios from "axios";
import { GoPay } from "~/goPay";
import { handleError } from "~/helpers";
import { misc } from "~/types/misc";

export class Misc {
  private __client: GoPay;

  constructor({ client }: misc.Constructor) {
    this.__client = client;
  }

  /**
   *
   * @param currency
   * @returns
   */
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

    if (res.status == 200) {
      return res.data;
    } else {
      if (this.__client.__log) handleError(res.data);
    }
  }

  /**
   *
   * @param data
   * @returns
   */
  async accountStatement(data: misc.accountStatement) {
    const res = await axios({
      url: this.__client.url + "/accounts/account-statement",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + (await this.__client.getAccessToken()),
      },
      data: {
        date_from: data.date_from.toDateString(),
        date_to: data.date_to.toDateString(),
        goid: this.__client.credentials.goID,
        currency: data.currency,
        format: data.format,
      },
    });

    if (res.status == 200) {
      return res.data;
    } else {
      if (this.__client.__log) handleError(res.data);
    }
  }
}
