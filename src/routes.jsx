import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Developer from './pages/Developer';
import MobileFooter from './components/MobileFooter';

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={() => {
        return <Home />
      }} />

      <Route path="/developer" component={() => {
        return <Developer />
      }} />

      <MobileFooter />
    </BrowserRouter>
  );
}

export default Routes;