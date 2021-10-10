import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from '../Home'
import Error from '../Error'


const Main = () => {
  return(
    <main>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route component={Error} />
      </Switch>
    </main>
  );
};

export default Main;
