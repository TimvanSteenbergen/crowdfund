/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCampaign = /* GraphQL */ `
  mutation CreateCampaign(
    $input: CreateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    createCampaign(input: $input, condition: $condition) {
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
export const updateCampaign = /* GraphQL */ `
  mutation UpdateCampaign(
    $input: UpdateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    updateCampaign(input: $input, condition: $condition) {
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
export const deleteCampaign = /* GraphQL */ `
  mutation DeleteCampaign(
    $input: DeleteCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    deleteCampaign(input: $input, condition: $condition) {
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
export const createDonation = /* GraphQL */ `
  mutation CreateDonation(
    $input: CreateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    createDonation(input: $input, condition: $condition) {
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
export const updateDonation = /* GraphQL */ `
  mutation UpdateDonation(
    $input: UpdateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    updateDonation(input: $input, condition: $condition) {
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
export const deleteDonation = /* GraphQL */ `
  mutation DeleteDonation(
    $input: DeleteDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    deleteDonation(input: $input, condition: $condition) {
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
