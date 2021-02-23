/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncCampaigns = /* GraphQL */ `
  query SyncCampaigns(
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCampaigns(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        Donations {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
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
      Donations {
        items {
          id
          name
          description
          image
          PaymentType
          campaignID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        Donations {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDonations = /* GraphQL */ `
  query SyncDonations(
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDonations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        image
        PaymentType
        campaignID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDonation = /* GraphQL */ `
  query GetDonation($id: ID!) {
    getDonation(id: $id) {
      id
      name
      description
      image
      PaymentType
      campaignID
      _version
      _deleted
      _lastChangedAt
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
        description
        image
        PaymentType
        campaignID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
