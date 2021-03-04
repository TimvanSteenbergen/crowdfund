import React, { useState } from 'react';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { createCampaign as createCampaignMutation } from '../graphql/mutations';

const initialFormState = { name: '', description: '', FundraiserName: '', FundraiserText: '', FundraiserSocialnumber: '' }

function App() {
    const [campaigns, setCampaigns] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    async function createCampaign() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ query: createCampaignMutation, variables: { input: formData } });
        if (formData.CampaignImage) {
            const image = await Storage.get(formData.CampaignImage);
            formData.CampaignImage = image;
        }
        setCampaigns([...campaigns, formData]);
        setFormData(initialFormState);
    }

    async function onChange(e) {
        if (!e.target.files[0]) return
        const file = e.target.files[0];
        setFormData({ ...formData, CampaignImage: file.name });
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
            <input
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
            />
            <input
                type="file"
                onChange={onChange}
            />
            <button onClick={createCampaign}>Create Campaign</button>
        </div>
    );
}

export default App;
