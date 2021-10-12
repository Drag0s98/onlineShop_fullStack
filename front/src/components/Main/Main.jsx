import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Error from '../Error';
import Auth from '../Auth';


const Main = () => {
  return(
    <main>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/auth' component={Auth} />
        <Route component={Error} />
      </Switch>
    </main>
  );
};

export default Main;
