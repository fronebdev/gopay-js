/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */

export type item = {
  type: string;
  name: string;
  amount: number;
  count: number;
  vat_rate: string;
  ean: number;
  product_url: string;
};

export type format =
  | "CSV_A"
  | "CSV_B"
  | "CSV_C"
  | "CSV_D"
  | "XLS_A"
  | "XLS_B"
  | "XLS_C"
  | "ABO_A"
  | "ABO_B";
