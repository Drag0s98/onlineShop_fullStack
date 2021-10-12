import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Auth from '../Auth';
import Cart from '../Cart'
import Error from '../Error';

const Main = () => {
  return(
    <main>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/auth' component={Auth} />
        <Route path='/cart' component={Cart} />
        <Route component={Error} />
      </Switch>
    </main>
  );
};

export default Main;
