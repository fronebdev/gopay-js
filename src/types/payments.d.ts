/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */

import { goPay } from "../factory/GoPay";

export namespace payments {
  export interface Constructor {
    client: goPay;
  }
}
