/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCampaign = /* GraphQL */ `
  query GetCampaign($id: ID!) {
    getCampaign(id: $id) {
      id
      name
      description
      CampaignImage
      FundraiserImage
      FundraiserName
      FundraiserText
      FundraiserSocialnumber
      QRcodeImage
      IsActive
      StartDate
      EndDate
      createdAt
      updatedAt
    }
  }
`;
export const listCampaigns = /* GraphQL */ `
  query ListCampaigns(
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        CampaignImage
        FundraiserImage
        FundraiserName
        FundraiserText
        FundraiserSocialnumber
        QRcodeImage
        IsActive
        StartDate
        EndDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDonation = /* GraphQL */ `
  query GetDonation($id: ID!) {
    getDonation(id: $id) {
      id
      name
      campaign {
        id
        name
        description
        CampaignImage
        FundraiserImage
        FundraiserName
        FundraiserText
        FundraiserSocialnumber
        QRcodeImage
        IsActive
        StartDate
        EndDate
        createdAt
        updatedAt
      }
      description
      image
      PaymentType
      createdAt
      updatedAt
    }
  }
`;
export const listDonations = /* GraphQL */ `
  query ListDonations(
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        campaign {
          id
          name
          description
          CampaignImage
          FundraiserImage
          FundraiserName
          FundraiserText
          FundraiserSocialnumber
          QRcodeImage
          IsActive
          StartDate
          EndDate
          createdAt
          updatedAt
        }
        description
        image
        PaymentType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
