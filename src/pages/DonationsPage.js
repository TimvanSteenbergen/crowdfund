import React, { useState, useEffect } from 'react';
import '../App.css';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { listDonations } from '../graphql/queries';
import { createDonation as createDonationMutation, deleteDonation as deleteDonationMutation } from '../graphql/mutations';

const initialFormState = { name: '', description: '' }

function App() {
    const [donations, setDonations] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        fetchDonations();
    }, []);

    async function fetchDonations() {
        const apiData = await API.graphql({ query: listDonations });
        const donationsFromAPI = apiData.data.listDonations.items;
        await Promise.all(donationsFromAPI.map(async donation => {
            if (donation.image) {
                const image = await Storage.get(donation.image);
                donation.image = image;
            }
            return donation;
        }))
        setDonations(apiData.data.listDonations.items);
    }

    async function createDonation() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ query: createDonationMutation, variables: { input: formData } });
        if (formData.image) {
            const image = await Storage.get(formData.image);
            formData.image = image;
        }
        setDonations([...donations, formData]);
        setFormData(initialFormState);
    }

    async function deleteDonation({ id }) {
        const newDonationsArray = donations.filter(donation => donation.id !== id);
        setDonations(newDonationsArray);
        await API.graphql({ query: deleteDonationMutation, variables: { input: { id } } });
    }

    async function onChange(e) {
        if (!e.target.files[0]) return
        const file = e.target.files[0];
        setFormData({ ...formData, image: file.name });
        await Storage.put(file.name, file);
        fetchDonations();
    }

    return (
        <div className="App">
            <h1>My Donations App</h1>
            <input
                onChange={e => setFormData({ ...formData, 'name': e.target.value })}
                placeholder="Donation name"
                value={formData.name}
            />
            <input
                onChange={e => setFormData({ ...formData, 'description': e.target.value })}
                placeholder="Donation description"
                value={formData.description}
            />
            <input
                type="file"
                onChange={onChange}
            />
            <button onClick={createDonation}>Create Donation</button>
            <div style={{ marginBottom: 30 }}>
                {
                    donations.map(donation => (
                        <div key={donation.id || donation.name}>
                            <h2>{donation.name}</h2>
                            <p>{donation.description}</p>
                            <button onClick={() => deleteDonation(donation)}>Delete donation</button>
                            {
                                donation.image && <img src={donation.image} style={{ width: 400 }} alt='' />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default withAuthenticator(App);
