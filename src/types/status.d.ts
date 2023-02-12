import { payments } from "~/types/payments";

export type CurrencyCode =
  | "CZK"
  | "EUR"
  | "PLN"
  | "USD"
  | "GBP"
  | "HUF"
  | "RON"
  | "BGN"
  | "HRK";

export type PaymentState =
  | "CREATED"
  | "PAID"
  | "CANCELED"
  | "PAYMENT_METHOD_CHOSEN"
  | "TIMEOUTED"
  | "AUTHORIZED"
  | "REFUNDED"
  | "PARTIALLY_REFUNDED";
export type PaymentInstrument =
  | "PAYMENT_CARD"
  | "BANK_ACCOUNT"
  | "GPAY"
  | "APPLE_PAY"
  | "GOPAY"
  | "PAYPAL"
  | "MPAYMENT"
  | "PRSMS"
  | "PAYSAFECARD"
  | "BITCOIN"
  | "CLICK_TO_PAY";
export enum PaymentStatus {
  WAITING_FOR_ONLINE_PAYMENT = "_101",
  WAITING_FOR_OFFLINE_PAYMENT = "_102",
  BANK_PAYMENT_CONFIRMED_WITH_ADVICE = "_3001",
  BANK_PAYMENT_CONFIRMED_WITH_STATEMENT = "_3002",
  BANK_PAYMENT_NOT_CONFIRMED = "_3003",
  APPROVED_WITH_ZERO_AMOUNT = "_5001",
  REJECTED_AT_CUSTOMER_BANK_AUTHORIZATION_CENTER_DUE_TO_CARD_LIMITS = "_5002",
  REJECTED_AT_CUSTOMER_BANK_AUTHORIZATION_CENTER_DUE_TO_ISSUER_PROBLEMS = "_5003",
  REJECTED_AT_CUSTOMER_BANK_AUTHORIZATION_CENTER_DUE_TO_CARD_PROBLEMS = "_5004",
  REJECTED_AT_CUSTOMER_BANK_AUTHORIZATION_CENTER_DUE_TO_BLOCKED_CARD = "_5005",
  REJECTED_AT_CUSTOMER_BANK_AUTHORIZATION_CENTER_DUE_TO_INSUFFICIENT_FUNDS = "_5006",
  REJECTED_AT_CUSTOMER_BANK_AUTHORIZATION_CENTER_DUE_TO_EXPIRED_CARD = "_5007",
  REJECTED_AT_CUSTOMER_BANK_AUTHORIZATION_CENTER_DUE_TO_CVV_CVC_DECLINE = "_5008",
  REJECTED_AT_CUSTOMER_BANK_3DSECURE = "_5009",
  REJECTED_AT_CUSTOMER_BANK_3DSECURE_2 = "_5015",
  REJECTED_AT_CUSTOMER_BANK_3DSECURE_3 = "_5017",
  REJECTED_AT_CUSTOMER_BANK_3DSECURE_4 = "_5018",
  REJECTED_AT_CUSTOMER_BANK_3DSECURE_5 = "_5019",
  REJECTED_AT_CUSTOMER_BANK_3DSECURE_6 = "_6502",
  REJECTED_AT_CUSTOMER_BANK_3DSECURE_7 = "_6504",
  REJECTED_AT_CUSTOMER_BANK_DUE_TO_CARD_PROBLEMS_2 = "_5010",
  REJECTED_AT_CUSTOMER_BANK_DUE_TO_CARD_PROBLEMS_3 = "_5014",
  REJECTED_AT_CUSTOMER_BANK_DUE_TO_ACCOUNT_PROBLEMS = "_5011",
  REJECTED_AT_CUSTOMER_BANK_DUE_TO_ACCOUNT_PROBLEMS_2 = "_5036",
  REJECTED_AT_CUSTOMER_BANK_DUE_TO_UNSPECIFIED_REASON = "_5012",
  REJECTED_AT_CUSTOMER_BANK_DUE_TO_INCORRECT_CARD_NUMBER = "_5013",
  REJECTED_AT_CUSTOMER_BANK_PAYMENT_NOT_AUTHORIZED = "_5016",
  UNKNOWN_CONFIGURATION = "_5020",
  REJECTED_AT_CUSTOMER_BANK_DUE_TO_CARD_LIMIT = "_5021",
  TECHNICAL_PROBLEM_AT_CUSTOMER_BANK_AUTHORIZATION_CENTER = "_5022",
  PAYMENT_NOT_PROCESSED = "_5023",
  PAYMENT_NOT_PROCESSED_2 = "_5038",
  PAYMENT_NOT_PROCESSED_3 = "_5024",
  PAYMENT_NOT_PROCESSED_REASON_DISCLOSED_TO_CUSTOMER = "_5025",
  PAYMENT_NOT_PROCESSED_CREDITED_AMOUNT_EXCEEDED_PAID_AMOUNT = "_5026",
  PAYMENT_NOT_PROCESSED_USER_NOT_AUTHORIZED = "_5027",
  PAYMENT_NOT_PROCESSED_AMOUNT_EXCEEDED_AUTHORIZED_AMOUNT = "_5028",
  PAYMENT_NOT_PROCESSED_YET = "_5029",
  PAYMENT_NOT_PROCESSED_DUE_TO_REPEATED_PAYMENT = "_5030",
  TECHNICAL_PROBLEM_AT_BANK = "_5031",
  SMS_DELIVERY_FAILED = "_5033",
  CARD_NOT_SUPPORTED_IN_REGION = "_5035",
  PAYMENT_CANCELLED_BY_CARD_HOLDER = "_5037",
  REJECTED_AT_CUSTOMER_BANK_DUE_TO_BLOCKED_CARD = "_5039",
  DUPLICATE_REVERSAL_TRANSACTION = "_5040",
  DUPLICATE_TRANSACTION = "_5041",
  BANK_PAYMENT_REJECTED = "_5042",
  PAYMENT_CANCELLED_BY_USER = "_5043",
  SMS_SENT_DELIVERY_FAILED = "_5044",
  PAYMENT_RECEIVED_PROCESSING_IN_BITCOIN_NETWORK = "_5045",
  PAYMENT_NOT_PAID_IN_FULL = "_5046",
  PAYMENT_AFTER_DUE_DATE = "_5047",
  CUSTOMER_DID_NOT_GIVE_CONSENT_FOR_PSD2_PAYMENT = "_5048",
}

export interface PaymentCard {
  card_number: string;
  card_expiration: string;
  card_brand: string;
  card_issuer_country: string;
  card_issuer_bank: string;
  card_token?: string;
  three_ds_result?: "N/" | "Y/Y" | "Y/A" | "X/X";
}

export type Contact = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  city: string;
  street: string;
  postal_code: string;
  country_code: string;
};

export interface BankAccount {
  prefix: string;
  account_number: string;
  bank_code: string;
  iban: string;
  bic: string;
  account_name: string;
}

export type Payer = {
  allowed_payment_instruments: PaymentInstrument[];
  default_payment_instrument: PaymentInstrument;
  allowed_swifts: string[];
  default_swift: string;
  contact: Contact;
  bank_account: BankAccount;
  payment_card: PaymentCard;
  verify_pin: string;
  allowed_card_token: string;
  email: string;
};

export type PayerTarget = {
  type: "ACCOUNT";
  goid: number;
};

export type additionalParam = {
  name: string;
  value: string;
};

export type Language =
  | "CS"
  | "SK"
  | "EN"
  | "DE"
  | "RU"
  | "PL"
  | "HU"
  | "RO"
  | "BG"
  | "HR"
  | "IT"
  | "FR"
  | "ES"
  | "UK";

export type PreAuthStatus =
  | "REQUESTED"
  | "AUTHORIZED"
  | "CAPTURED"
  | "CANCELED";

export type Preauthorization = {
  requested: boolean;
  state: PreAuthStatus;
};

export type EetCode = "fik" | "bkp" | "pkp";

export interface Status {
  id: number;
  order_number;
  state: PaymentState;
  sub_state: PaymentStatus;
  amount: number;
  currency: CurrencyCode;
  payment_instrument: PaymentInstrument;
  payer: PayerTarget;
  target: PayerTarget;
  additional_params: additionalParam[];
  lang: Language;
  recurrence: payments.Recurrence;
  preauthorization: Preauthorization;
  eet_code: EetCode;
  gw_url: string;
}
