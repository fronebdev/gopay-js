/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */

import axios from "axios";
import { with_gopay } from "../helpers";
import { gopay } from "../types/gopay";

export class GoPay {
  public url = "https://gate.gopay.cz/api;";
  public credentials: gopay.credentials;
  public __log: boolean;

  constructor({ credentials, enviroment, log }: gopay.Constructor) {
    this.__log = log;
    this.credentials = credentials;

    if (enviroment == "sandbox") {
      this.url = "https://gw.sandbox.gopay.com/api";
    }

    if (log) console.log(with_gopay("Initializating..."));
  }

  async getTokens() {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("scope", "payment-create");

    const res = await axios({
      url: this.url + "/oauth2/token",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer(
            this.credentials.clientID + ":" + this.credentials.clientSecret
          ).toString("base64"),
      },
      data: params,
    });

    return res.data;
  }

  async getAccessToken() {
    const token = JSON.parse(await this.getTokens())

    return token.access_token;
  }

  log() {
    return this.__log;
  }
}
