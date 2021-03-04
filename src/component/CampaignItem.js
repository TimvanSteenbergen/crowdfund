import React from 'react';

const CampaignItem = ({ CampaignImage, CampaignName }) => {
  return (
    <li className="campaign-item">
      <p>{CampaignImage}</p>
      <img className="campaign-image" src={`s3://mykinetstoragebucket62652-dev/public/${CampaignImage}`} alt={`${CampaignName} - Campaign`} />
      <h2 className="campaign-name">{CampaignName}</h2>
    </li>
  );
}

export default CampaignItem;