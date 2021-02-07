import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>This is crowdfund. A non-profit, well to be honest, low-profit organisation that aims to get your project funded</p>
                <p>...</p>
            </Content>
        </div>
    );

}

export default AboutPage;