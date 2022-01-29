/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */

import axios from "axios";
import { GoPay } from "..";
import { eet } from "../types/eet";

export class Misc {
  private __client: GoPay;

  constructor({ client }: eet.Constructor) {
    this.__client = client;
  }
}
