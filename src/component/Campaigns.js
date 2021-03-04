import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import CampaignItem from './CampaignItem';
import CampaignCreation from './CampaignCreation';

const listCampaigns = `
query listCampaigns {
  listCampaigns {
    items{
      id
      name
      description
      campaignImage
    }
  }
}
`

const Campaigns = () => {
  const [campaignData, setCampaignData] = useState([])

  const loadCampaignData = async () => {
    const { data } = await API.graphql(
      graphqlOperation(listCampaigns)
    );
    setCampaignData(data?.listCampaigns?.items);
  }

  useEffect(() => {
    loadCampaignData();
  }, []);

  return (
    <section id="campaigns" className="section">
      <header className="imageheader"></header>
      <div className="container">
        <h2 className="headline">Campaigns</h2>
        <p>H+ Sport is <em>dedicated to creating</em> eco-friendly, high-quality, nutrient-rich, nutritional campaigns that <em>enhance active lifestyles</em>. We <a href="#guarantee">guarantee</a> it. Take a look at some of our campaigns.</p>
      </div>
      <CampaignCreation />
      <ul className="campaign-list">
        {
          campaignData?.map((campaign) => <CampaignItem CampaignImage={`${campaign.campaignImage}`} CampaignName={`${campaign.name}`} />)
        }
      </ul>
    </section>
  );
}

export default Campaigns;