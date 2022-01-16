/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */

import goPay from "./factory/goPay";
import { with_gopay } from "./helpers";

export * from "./factory/goPay";

const gp = new goPay({
  log: true,
  enviroment: "test",
  credentials: {
    clientID: "1390489727",
    clientSecret: "9G9ha7Qa",
  },
});

gp.getToken();

console.log(with_gopay("Starting ..."));
