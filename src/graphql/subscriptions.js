/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign {
    onCreateCampaign {
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
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign {
    onUpdateCampaign {
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
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign {
    onDeleteCampaign {
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
export const onCreateDonation = /* GraphQL */ `
  subscription OnCreateDonation {
    onCreateDonation {
      id
      name
      FundraiserName
      ToCampaign {
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
export const onUpdateDonation = /* GraphQL */ `
  subscription OnUpdateDonation {
    onUpdateDonation {
      id
      name
      FundraiserName
      ToCampaign {
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
export const onDeleteDonation = /* GraphQL */ `
  subscription OnDeleteDonation {
    onDeleteDonation {
      id
      name
      FundraiserName
      ToCampaign {
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
