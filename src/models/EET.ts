/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */

import { GoPay } from "~/goPay";
import { eet } from "~/types/eet";

export class Misc {
  // @ts-ignore
  private __client: GoPay;
  // @ts-ignore
  private __sufix = "/payments/payment";

  constructor({ client }: eet.Constructor) {
    this.__client = client;
  }
}
