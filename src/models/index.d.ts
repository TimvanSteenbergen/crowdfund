import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ModelAttributeTypes {
  BINARY = "binary",
  BINARY_SET = "binarySet",
  BOOL = "bool",
  LIST = "list",
  MAP = "map",
  NUMBER = "number",
  NUMBER_SET = "numberSet",
  STRING = "string",
  STRING_SET = "stringSet",
  NULL = "_null"
}

export enum PaymentType {
  VISA = "VISA",
  BITCOIN = "BITCOIN",
  BOGUS = "BOGUS",
  DANKORT = "DANKORT",
  DINERS_CLUB = "DINERS_CLUB",
  DISCOVER = "DISCOVER",
  DOGECOIN = "DOGECOIN",
  FORBRUGSFORENINGEN = "FORBRUGSFORENINGEN",
  JCB = "JCB",
  LITECOIN = "LITECOIN",
  MAESTRO = "MAESTRO",
  MASTERCARD = "MASTERCARD",
  PAYPAL = "PAYPAL",
  AMERICAN_EXPRESS = "AMERICAN_EXPRESS",
  BUNQ = "BUNQ"
}

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export declare class ModelCampaignConnection {
  readonly items?: (Campaign | null)[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelCampaignConnection>);
}

export declare class Campaign {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly CampaignImage?: string;
  readonly FundraiserImage?: string;
  readonly FundraiserName?: string;
  readonly FundraiserText?: string;
  readonly FundraiserSocialnumber?: string;
  readonly QRcodeImage?: string;
  readonly IsActive?: boolean;
  readonly StartDate?: string;
  readonly EndDate?: string;
  readonly Donations?: ModelDonationConnection;
  readonly _version: number;
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<Campaign>);
}

export declare class ModelDonationConnection {
  readonly items?: (Donation | null)[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelDonationConnection>);
}

export declare class Donation {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly image?: string;
  readonly PaymentType?: PaymentType | keyof typeof PaymentType;
  readonly campaignID: string;
  readonly _version: number;
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<Donation>);
}

