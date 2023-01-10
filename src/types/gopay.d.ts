/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */



export namespace gopay {
  export interface Constructor {
    credentials: credentials;
    enviroment: "sandbox" | "production";
    log: boolean;
  }


  type TokenScopeType = 'payment-create' | 'payment-all'

  export type credentials = {
    clientID: string;
    goID: string;
    clientSecret: string;
  };
}
