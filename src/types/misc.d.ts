/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */

import { GoPay } from "~/GoPay";
import { format } from "~/types/public";

export namespace misc {
  export interface Constructor {
    client: GoPay;
  }

  export interface accountStatement {
    date_from: Date;
    date_to: Date;
    currency: string;
    format: format;
  }
}
