import React from 'react';

import Card from '../components/Card';

import devgrub from '../assets/images/devgrub.png';
import youtube from '../assets/images/youtube.png';
import createcampaign from '../assets/images/createcampaign.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: devgrub,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Create your campaign',
                    subTitle: 'Start collecting funds.',
                    imgSrc: createcampaign,
                    link: '/campaignedit',
                    selected: false
                },
                {
                    id: 2,
                    title: 'How does it work',
                    subTitle: 'YouTube channel',
                    imgSrc: youtube,
                    link: '/campaignedit',
                    selected: false
                },
            ]
        }
    }


    handleOnMouseOver = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    handleOnClick = (cardlink) => {
        window.location = cardlink;
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} 
            onclick={(e => this.handleOnClick(item.link))} 
            onmouseover={(e => this.handleOnMouseOver(item.id, e))} 
            key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;