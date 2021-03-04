import React, { useState } from 'react';
import { API, Storage } from 'aws-amplify';
import { createDonation as createNewDonation } from '../graphql/mutations';

const initialFormState = { name: '', description: '', donationImage: ''}

const DonationCreation = () =>  {
    const [donations, setDonations] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    async function createDonation() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ query: createNewDonation, variables: { input: formData } });
        if (formData.donationImage) {
            const image = await Storage.get(formData.donationImage);
            formData.donationImage = image;
        }
        setDonations([...donations, formData]);
        setFormData(initialFormState);
    }

    async function onChange(e) {
        if (!e.target.files[0]) return
        const file = e.target.files[0];
        setFormData({ ...formData, donationImage: file.name });
        console.log('putting file on storega');
        await Storage.put(file.name, file);
    }

    return (
        <div className="App">
            <h1>Add a donation</h1>
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
            <button onClick={createDonation}>Create Donation</button>
        </div>
    );
}

export default DonationCreation;