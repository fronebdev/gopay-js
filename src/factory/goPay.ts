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

class goPay {
  private url: string;
  private credentials: gopay.credentials;
  private __log: boolean;

  constructor({ credentials, enviroment, log }: gopay.goPayConstructor) {
    this.__log = log;
    this.credentials = credentials;

    if (enviroment == "test") {
      this.url = "https://gw.sandbox.gopay.com/api";
    } else {
      this.url = "https://gate.gopay.cz/api";
    }

    if(log)
      console.log(with_gopay("Initializating..."));
  }

  async getToken() {
      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials")
      params.append("scope", "payment-create")

      const res = await axios({
        url: this.url + "/oauth2/token",
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Basic " + new Buffer(this.credentials.clientID + ":" + this.credentials.clientSecret).toString("base64"),
        },
        data: params,
      })

      return res.data
  }
}

export default goPay;