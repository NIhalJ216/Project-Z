import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetail';

function Appredux() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/appredux" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route>404 NoT FoUnD...!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Appredux;