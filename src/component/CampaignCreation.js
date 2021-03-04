import React, { useState } from 'react';
import { API, Storage } from 'aws-amplify';
import { createCampaign as createNewCampaign } from '../graphql/mutations';

const initialFormState = { name: '', description: '', campaignImage: ''}

const CampaignCreation = () =>  {
    const [campaigns, setCampaigns] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    async function createCampaign() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ query: createNewCampaign, variables: { input: formData } });
        if (formData.campaignImage) {
            const image = await Storage.get(formData.campaignImage);
            formData.campaignImage = image;
        }
        setCampaigns([...campaigns, formData]);
        setFormData(initialFormState);
    }

    async function onChange(e) {
        if (!e.target.files[0]) return
        const file = e.target.files[0];
        setFormData({ ...formData, campaignImage: file.name });
        console.log('putting file on storega');
        await Storage.put(file.name, file);
    }

    return (
        <div className="App">
            <h1>Add a campaign</h1>
            <input
                onChange={e => setFormData({ ...formData, 'name': e.target.value })}
                placeholder="Campaign name"
                value={formData.name}
            />
            <input
                onChange={e => setFormData({ ...formData, 'description': e.target.value })}
                placeholder="Campaign description"
                value={formData.description}
            />
            {/* <input
                onChange={e => setFormData({ ...formData, 'FundraiserName': e.target.value })}
                placeholder="Fundraiser name"
                value={formData.FundraiserName}
            />
            <input
                onChange={e => setFormData({ ...formData, 'FundraiserText': e.target.value })}
                placeholder="Fundraiser text"
                value={formData.FundraiserText}
            />
            <input
                onChange={e => setFormData({ ...formData, 'FundraiserSocialnumber': e.target.value })}
                placeholder="Fundraiser socialnumber"
                value={formData.FundraiserSocialnumber}
            />*/}
            <input
                type="file"
                onChange={onChange}
            /> 
            <button onClick={createCampaign}>Create Campaign</button>
        </div>
    );
}

export default CampaignCreation;