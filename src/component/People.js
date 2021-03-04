import React from 'react';
import PersonCard from './PersonCard'
import { API, graphqlOperation } from 'aws-amplify';
import { useEffect, useState } from 'react';

const listPeople = `
query listPersons{
  listPersons {
    items {
      dynamicSlug
      title
      fullName
      description
    }
  }
}

`

const People = () => {
  const [peopleData, setPeopleData] = useState([])
  const linkPeopleData = async () => {
    const { data } = await API.graphql(
      graphqlOperation(listPeople)
    );
    setPeopleData(data?.listPersons?.items);
  };
  useEffect(() => {
    linkPeopleData();
  }, [])

  return (
    <section id="people" className="section">
      <header className="imageheader"></header>
      <div className="container">
        <h2 className="headline">People</h2>
        <div className="people-cards">
          {
            peopleData.map((person) =>
              <PersonCard dynamicSlug={`${person.dynamicSlug}`}
                fullName={`${person.fullName}`}
                title={`${person.title}`}
                description={`${person.description}`}
              />)
          }
        </div>
      </div>
    </section>
  );
}

export default People;