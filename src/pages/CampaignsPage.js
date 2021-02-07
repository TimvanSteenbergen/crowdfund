import React, { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { listCampaigns } from '../graphql/queries';
import { createCampaign as createCampaignMutation, deleteCampaign as deleteCampaignMutation } from '../graphql/mutations';
import { boolean } from 'yargs';

const initialFormState = { name: '', description: '' }

function App() {
    const [campaigns, setCampaigns] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        fetchCampaigns();
    }, []);

    async function fetchCampaigns() {
        const apiData = await API.graphql({ query: listCampaigns });
        const CampaignsFromAPI = apiData.data.listCampaigns.items;
        await Promise.all(CampaignsFromAPI.map(async Campaign => {
            if (Campaign.CampaignImage) {
                const image = await Storage.get(Campaign.CampaignImage);
                Campaign.CampaignImage = image;
            }
            return Campaign;
        }))
        setCampaigns(apiData.data.listCampaigns.items);
    }

    async function createCampaign() {
        console.log('1sdf');
        if (!formData.name || !formData.description) return;
        console.log('2sdf');
        await API.graphql({ query: createCampaignMutation, variables: { input: formData } });
        console.log('3sdf');
        if (formData.CampaignImage) {
            console.log('4sdf');
            const image = await Storage.get(formData.CampaignImage);
            formData.CampaignImage = image;
            console.log('5sdf');
        }
        setCampaigns([...campaigns, formData]);
        setFormData(initialFormState);
    }

    async function deleteCampaign({ id }) {
        const newCampaignsArray = campaigns.filter(Campaign => Campaign.id !== id);
        setCampaigns(newCampaignsArray);
        await API.graphql({ query: deleteCampaignMutation, variables: { input: { id } } });
    }

    async function onChange(e) {
        if (!e.target.files[0]) return
        const file = e.target.files[0];
        setFormData({ ...formData, CampaignImage: file.name });
        await Storage.put(file.name, file);
        fetchCampaigns();
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
                type="file"
                onChange={onChange}
            />
            <button onClick={createCampaign}>Create Campaign</button>
            <div style={{ marginBottom: 30 }}>Hier mijn lijst van campaigns
                {
                    campaigns.map(Campaign => (
                        <div key={Campaign.id || Campaign.name}>
                            <h2>{Campaign.name}</h2>
                            <p>{Campaign.description}</p>
                            <button onClick={() => deleteCampaign(Campaign)}>Delete Campaign</button>
                            {
                                Campaign.CampaignImage && <img src={Campaign.CampaignImage} style={{ width: 400 }} alt='' />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default withAuthenticator(App);
