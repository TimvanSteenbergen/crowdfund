// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ModelAttributeTypes = {
  "BINARY": "binary",
  "BINARY_SET": "binarySet",
  "BOOL": "bool",
  "LIST": "list",
  "MAP": "map",
  "NUMBER": "number",
  "NUMBER_SET": "numberSet",
  "STRING": "string",
  "STRING_SET": "stringSet",
  "NULL": "_null"
};

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

const ModelSortDirection = {
  "ASC": "ASC",
  "DESC": "DESC"
};

const { ModelCampaignConnection, Campaign, ModelDonationConnection, Donation } = initSchema(schema);

export {
  ModelAttributeTypes,
  PaymentType,
  ModelSortDirection,
  ModelCampaignConnection,
  Campaign,
  ModelDonationConnection,
  Donation
};