/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */

export namespace gopay {
  export interface goPayConstructor {
    credentials: credentials;
    enviroment: "test" | "production";
    log: boolean;
  }

  export type credentials = {
    clientID: string;
    clientSecret: string;
  };
}
