import React from 'react';
import './App.css';
import { withAuthenticator} from '@aws-amplify/ui-react';
import Campaigns from './component/Campaigns';
import Footer from './component/Footer';
import Guarantee from './component/Guarantee';
import Header from './component/Header';
import History from './component/History';
import People from './component/People';
import Products from './component/Products';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <History />
        <Campaigns />
        <Products />
        <Guarantee />
        <People />
        <Footer />
      </div>
    );
  }
}

export default withAuthenticator(App);
