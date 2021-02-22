import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

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
  readonly Donations?: (Donation | null)[];
  constructor(init: ModelInit<Campaign>);
  static copyOf(source: Campaign, mutator: (draft: MutableModel<Campaign>) => MutableModel<Campaign> | void): Campaign;
}

export declare class Donation {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly image?: string;
  readonly PaymentType?: PaymentType | keyof typeof PaymentType;
  readonly campaignID: string;
  constructor(init: ModelInit<Donation>);
  static copyOf(source: Donation, mutator: (draft: MutableModel<Donation>) => MutableModel<Donation> | void): Donation;
}