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
    enviroment: "sandbox" | "production";
    log: boolean;
  }

  export type credentials = {
    clientID: string;
    goID: string;
    clientSecret: string;
  };
}
