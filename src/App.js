import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// import { listCampaigns } from './graphql/queries';
// import { createCampaign as createCampaignMutation, deleteCampaign as deleteCampaignMutation } from './graphql/mutations';
// import { listNotes } from './graphql/queries';
// import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CampaignsPage from './pages/CampaignsPage';
import DonationsPage from './pages/DonationsPage';
import ContactPage from './pages/ContactPage';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Crowdfund',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Campaigns', path: '/campaigns' },
        { title: 'Donations', path: '/donations' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Get Funds!',
        subTitle: 'Your idea deserves backing!',
        text: 'Checkout how to crowdfund with maximal revenue'
      },
      campaigns: {
        title: 'Campaings',
        subTitle: 'Fundraisers for your idea'
      },
      donations: {
        title: 'Donation Me',
        subTitle: 'No, no. It is all donation you.'
      },
      contact: {
        title: 'Contact',
        subTitle: 'Drop me a mail'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Crowdfund</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/campaigns">Campaigns</Link>
                <Link className="nav-link" to="/donations">Donations</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <AmplifySignOut />
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/campaigns" render={() => <CampaignsPage title={this.state.campaigns.title} />} />
          <Route path="/donations" render={() => <DonationsPage title={this.state.donations.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default withAuthenticator(App);