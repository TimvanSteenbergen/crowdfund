// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PaymentType = {
  "VISA": "VISA",
  "BITCOIN": "BITCOIN",
  "BOGUS": "BOGUS",
  "DANKORT": "DANKORT",
  "DINERS_CLUB": "DINERS_CLUB",
  "DISCOVER": "DISCOVER",
  "DOGECOIN": "DOGECOIN",
  "FORBRUGSFORENINGEN": "FORBRUGSFORENINGEN",
  "JCB": "JCB",
  "LITECOIN": "LITECOIN",
  "MAESTRO": "MAESTRO",
  "MASTERCARD": "MASTERCARD",
  "PAYPAL": "PAYPAL",
  "AMERICAN_EXPRESS": "AMERICAN_EXPRESS",
  "BUNQ": "BUNQ"
};

const { Campaign, Donation } = initSchema(schema);

export {
  Campaign,
  Donation,
  PaymentType
};