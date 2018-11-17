import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Checkout from './containers/Checkout/Checkout'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Layout>
          <Switch>
              <Route from="/checkout" exact component={Checkout} />
              <Route from="/"  exact component={BurgerBuilder} />
           </Switch>
        </Layout>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
